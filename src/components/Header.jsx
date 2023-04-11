import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div id='header'>
            <h1>Stranger's Things</h1>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Posts</li>
                    <li>Profile</li>
                    <li>Logout</li>
                </ul>
            </nav>
        </div>
    )
};

export default Header;