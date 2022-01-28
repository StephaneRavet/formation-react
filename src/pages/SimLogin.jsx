import React, { useContext, useState } from 'react';
import propTypes from 'prop-types';
import { Form, Formik, Field } from 'formik';
import * as Yup from 'yup'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Context } from '../context';

const Schema = Yup.object().shape({
    username: Yup.string().min(2, 'Trop court').max(20, 'Trop long').required('Requis'),
    password: Yup.string().min(2, 'Trop court').max(20, 'Trop long').required('Requis'),
})

function SimLogin() {
    const navigate = useNavigate()
    const [error, setError] = useState('')
    const { dispatch } = useContext(Context)
    return (
        <Formik
            initialValues={{
                username: '',
                password: '',
            }}
            validationSchema={Schema}
            onSubmit={async (values) => {
                const users = await axios.get('https://jsonplaceholder.typicode.com/users').then(res => res.data)
                const loggedUser = users.find(user => user.username === values.username && user.username === values.password)
                if (loggedUser) {
                    const { token } = loggedUser
                    axios.defaults.headers.common['Authorization'] = token // Toutes nos prochaines requetes seront auth
                    dispatch({ type: 'setUser', payload: loggedUser.name })
                    navigate(`/profile/${loggedUser.id}`)
                } else {
                    setError('Identifiant ou mot de passe incorrects')
                }
            }}
        >
            {({ errors, touched }) => <Form>
                {error && <div>{error}</div>}
                <div className='mb-3'>
                    {
                        errors.username && touched.username
                            ? <div className='alert alert-danger p-2'>{errors.username}</div>
                            : null
                    }
                    <Field
                        id="username"
                        name="username"
                        placeholder="Identifiant"
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className='mb-3'>
                    {
                        errors.password && touched.password
                            ? <div className='alert alert-danger p-2'>{errors.username}</div>
                            : null
                    }
                    <Field
                        id="password"
                        name="password"
                        placeholder="Mot de passe"
                        type="password"
                        className="form-control"
                    />
                </div>
                <button type="submit" className="btn btn-primary">Connexion</button>
            </Form>}
        </Formik>
    );
}

SimLogin.propTypes = {
    setUser: propTypes.func.isRequired
}

export default SimLogin;