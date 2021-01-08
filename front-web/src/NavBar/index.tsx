import './styles.css'
import {ReactComponent as Logo} from './Logo.svg'
import { Link } from 'react-router-dom'

function NavBar(){
    return (
        <nav className="main-navbar">
            <Logo/>
            <a href="home" ></a>
            <Link to="/" className="logo-text">
                DS Delivery
            </Link>
        </nav>
    );
}

export default NavBar;