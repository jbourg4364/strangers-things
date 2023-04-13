import React from 'react';
import { NavLink } from 'react-router-dom'
import './Header.css';

const Header = ({token, setToken, setIsLoggedIn}) => {
    return (
        <div id='header'>
            <h1>Stranger's Things</h1>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/posts">Posts</NavLink>
                <NavLink to="/profile">Profile</NavLink>
                <button onClick={()=>{
                    setToken('');
                    setIsLoggedIn(false);
                    console.log(token);
                }}>Logout</button>

            </nav>
        </div>
    )
};

export default Header;


