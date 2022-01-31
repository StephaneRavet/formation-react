import React, { useCallback, useState } from 'react';

function Contact(props) {
    const [email, setEmail] = useState('')
    const [country, setCountry] = useState('')
    const [showSuccess, setShowSuccess] = useState(false)

    const handleEmail = useCallback(event => setEmail(event.target.value), [])
    const handleCountry = useCallback(event => setCountry(event.target.value), [])
    const handleSubmit = useCallback(event => {
        // annuler le rechargement page
        event.preventDefault()
        // afficher un message de success
        setShowSuccess(true)
    }, [])

    return (
        <div>
            <h1>Demande de contact</h1>
            {showSuccess && <div className="alert alert-success" role="alert">Contact envoyé !</div>}
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Adresse email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="name@example.com"
                        onChange={handleEmail}
                        value={email}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="country" className="form-label">Pays</label>
                    <select
                        data-testid='trucbidule'
                        className="form-select"
                        id="country"
                        onChange={handleCountry}
                        value={country}
                    >
                        <option></option>
                        <option value="FRA">France</option>
                        <option value="BEL">Belgique</option>
                        <option value="CHE">Suisse</option>
                        <option value="CAN">Canada</option>
                    </select>
                </div>
                <button className='btn btn-primary'>Envoyer</button>
            </form>
        </div>
    );
}

export default Contact;