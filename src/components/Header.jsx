import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../context';
import logo from '../logo.svg';

function Header() {

    const {context} = useContext(Context)

    const loggedUser = context.user
        ? <div>Bienvenue {context.user} !</div>
        : <div>Connectez-vous !</div>

    return (
        <>
            <nav className="navbar navbar-dark bg-dark navbar-expand">
                <div className="container-fluid">
                    <div className="navbar-brand">
                        <img src={logo} alt="" width="30" height="24" className="d-inline-block align-text-bottom" />
                        Formation React
                    </div>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to='/' className="nav-link" aria-current="page">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/counter' className="nav-link">Counter</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/users' className="nav-link">Users</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/contact' className="nav-link">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/signup' className="nav-link">Inscription</Link>
                        </li>
                    </ul>
                </div>
                <div className='navbar-text'>
                    {loggedUser}
                </div>
            </nav>
        </>
    );
}

export default Header;