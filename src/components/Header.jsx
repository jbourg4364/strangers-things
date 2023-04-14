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
                {/* <NavLink to="/login">Login</NavLink> */}
                <NavLink to="/posts">Posts</NavLink>
                <NavLink to="/profile">Profile</NavLink>
                </>
                { isLoggedIn ?
                (<button style={{marginRight: 50, border: '2px solid white'}} onClick={()=>{
                    localStorage.removeItem('token');
                    setToken('');
                    setIsLoggedIn(false);
                    console.log(token);
                    navigate('./login');
                }}>Logout</button> )
                :
                (<button style={{marginRight: 50, border: '2px solid white'}} onClick={()=>{
                    // if (token !== '') {
                    //     // setIsLoggedIn(true);
                    //     // console.log(token);
                    //     navigate('./login');
                    // } else {
        
                        navigate('./login');
                    // }
                }}>Login</button>
                )
                } 

            </nav>
        </div>
    )
};

export default Header;


