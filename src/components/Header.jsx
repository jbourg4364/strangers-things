import React from 'react';
import { NavLink } from 'react-router-dom'
import './Header.css';

const Header = () => {
    return (
        <div id='header'>
            <h1>stranger's Things</h1>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/posts">Posts</NavLink>
                <NavLink to="/profile">Profile</NavLink>
                <NavLink to="/logout">Logout</NavLink>

            </nav>
        </div>
    )
};

export default Header;


