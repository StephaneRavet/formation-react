import React, { useCallback, useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

/*
Pratique - Formulaire de login
    Implémentation du formulaire avec formik
    Ajout de la validation
    Implémentation de l'API (https://jsonplaceholder.typicode.com/users)
    Implémentation de la redirection
    Mise à jour du state user
*/

function UserList(props) {
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then(res => setUsers(res.data))
    }, [])

    const [criteria, setCriteria] = useState('')
    const handleSearch = useCallback((event) => {
        setCriteria(event.target.value)
    }, [])

    const [usersFiltered, setUsersFiltered] = useState([])
    useEffect(() => {
        setUsersFiltered(users.filter(user => user.name.toLowerCase().includes(criteria.toLowerCase())))
    }, [criteria, users])

    return (
        <div>
            <h1>Liste des utilisateurs</h1>
            <input type="text" className='form-control' placeholder='Recherche' onChange={handleSearch} />
            <ul>
                {usersFiltered.map((user, index) => <li key={index}>
                    <Link to={`/profile/${user.id}`}>{user.name}</Link>
                </li>)
                }
            </ul>
        </div>
    );
}

export default UserList;