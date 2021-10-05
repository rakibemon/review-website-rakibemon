import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../img/logo.png'

const Header = () => {

    // Style when the page active
    const activeStyle = {
        color: "#fff",
        backgroundColor: '#1abc9c'
    }
    return (
        <div>
            <nav className='nav'>
                <div className="nav-logo">
                    <Link to='/contact'><img src={logo} alt="Logo" /></Link>
                </div>
                <div className="nav-navigation">
                    <NavLink activeStyle={activeStyle} className='nav-item' to='/home'> Home </NavLink>
                    <NavLink activeStyle={activeStyle} className='nav-item' to='/about'> About </NavLink>
                    <NavLink activeStyle={activeStyle} className='nav-item' to='/services'> Services </NavLink>
                    <NavLink activeStyle={activeStyle} className='nav-item' to='/contact'> Contact Us </NavLink>
                </div>
            </nav>
        </div>
    );
};

export default Header;