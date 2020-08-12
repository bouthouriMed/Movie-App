import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../logo.png'

function Nav() {
    return (
        <nav>
            
            {/* <a href="#" className="brand-logo">Logo</a> */}
            <ul className="menue">
                <Link to="/">
                    <li> <img className="logo" src={logo} alt="logo" /> </li>
                </Link>
                <Link to="/about">
                    <li> About</li>
                </Link>
                <Link to="/contact">
                    <li> Contact</li>
                </Link>
                <Link to="/community">
                    <li> Community</li>
                </Link>
                <Link to="/login">
                    <li> Login</li>
                </Link>
            </ul>
            
        </nav>
    )
}

export default Nav ;
