import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Profile(props) {
    // let params = useParams();
    let { id } = useParams();
    const navigate = useNavigate()
    const [user, setUser] = useState(null)
    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => setUser(res.data))
    }, [])

    const handleClick = useCallback(() => {
        navigate('/')
    }, [navigate])

    return (
        <div className='card p-3'>
            {user
                ? <div>
                    <div>Name : {user?.name}</div>
                    <div>Username : {user?.username}</div>
                    <div>Email : {user?.email}</div>
                    <div>Address : {user?.address?.street}</div>
                    <button onClick={handleClick} className="btn btn-secondary">Go Home</button>
                </div>
                : <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            }
        </div>
    );
}

export default Profile;