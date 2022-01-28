import React, { useEffect } from 'react';
import axios from 'axios';

function Test(props) {

    // async function getData() {
    //     // async/await
    //     // const response = await fetch('https://jsonplaceholder.typicode.com/users')
    //     // const users = await response.json()
    //     // console.info(users)

    //     // then
    //     // fetch('https://jsonplaceholder.typicode.com/users')
    //     //     .then(res => res.json())
    //     //     .then(users => console.info(users))

    //     // axios await
    //     try {
    //         const res = await axios.get('https://jsonplaceholder.typicode.com/users') // 👍
    //         console.info(res.data)
    //     } catch (err) {
    //         console.error('BOUM', err)
    //     }

    //     // axios then
    //     try {
    //         await axios
    //             .get('https://jsonplaceholder.typicode.com/u')
    //             .then(res => console.info(res.data))
    //     } catch (err) {
    //         console.error('BOUM 2', err)
    //     }
    // }

    // useEffect(getData, [])

    return (
        <div>
            ok
        </div>
    );
}

export default Test;