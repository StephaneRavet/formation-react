import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

function Header(props) {

    const loggedUser = props.user
        ? <div>Bienvenue {props.user} !</div>
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

Header.propTypes = {
    user: propTypes.string
}

export default Header;