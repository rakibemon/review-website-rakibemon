import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../img/logo.png'

const Header = () => {
    return (
        <div>
            <nav className='nav'>
                <div className="nav-logo">
                    <Link to='/contact'><img src={logo} alt="Logo" /></Link>
                </div>
                <div className="nav-navigation">
                    <NavLink className='nav-item' to='/home'> Home </NavLink>
                    <NavLink className='nav-item' to='/about'> About </NavLink>
                    <NavLink className='nav-item' to='/services'> Services </NavLink>
                    <NavLink className='nav-item' to='/contact'> Contact Us </NavLink>
                </div>
            </nav>
        </div>
    );
};

export default Header;