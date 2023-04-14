import React from 'react';
import { NavLink, Navigate, useNavigate } from 'react-router-dom'
import './Header.css';


const Header = ({token, setToken, isLoggedIn, setIsLoggedIn}) => {
    const navigate = useNavigate();
    
 
    return (
        <div id='header'>
            <h1>Stranger's Things</h1>
            <nav>
                <>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/posts">Posts</NavLink>
                <NavLink to="/profile">Profile</NavLink>
                </>
                { isLoggedIn ?
                (<button onClick={()=>{
                    localStorage.removeItem('token');
                    setToken('');
                    setIsLoggedIn(false);
                    console.log(token);
                    navigate('./login');
                }}>Logout</button> )
                :
                (<button onClick={()=>{
                        navigate('./login');
                }}>Login</button>
                )
                } 

            </nav>
        </div>
    )
};

export default Header;


