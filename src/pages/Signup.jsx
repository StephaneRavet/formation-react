import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';


const Schema = Yup.object().shape({
    firstname: Yup.string().min(2, 'Trop court').max(50, 'Trop long').required('Requis'),
    email: Yup.string().email('Email invalide').required('Requis'),
    country: Yup.string().required('Requis'),
})

function Signup(props) {
    return (
        <div>
            <h1>Inscription</h1>
            <Formik
                initialValues={{
                    firstname: '',
                    email: '',
                    country: '',
                }}
                validationSchema={Schema}
                onSubmit={values => {
                    console.info(values)
                }}
            >
                {({ errors, touched }) => <Form>
                    <div className='mb-3'>
                        <label htmlFor="firstname" className='form-label'>Prénom</label>
                        {
                            errors.firstname && touched.firstname
                                ? <div className='alert alert-danger p-2'>{errors.firstname}</div>
                                : null
                        }
                        <Field
                            id="firstname"
                            name="firstname"
                            placeholder="Prénom"
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="email" className='form-label'>Email</label>
                        <Field
                            id="email"
                            name="email"
                            placeholder="Email"
                            type="email"
                            className="form-control"
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="country" className='form-label'>Pays</label>
                        <Field
                            component="select"
                            id="country"
                            name="country"
                            className="form-select"
                        >
                            <option></option>
                            <option value="FRA">France</option>
                            <option value="BEL">Belgique</option>
                            <option value="CHE">Suisse</option>
                            <option value="CAN">Canada</option>
                        </Field>
                    </div>
                    <button type='submit' className="btn btn-primary">Valider</button>
                </Form>}
            </Formik>
        </div>
    );
}

export default Signup