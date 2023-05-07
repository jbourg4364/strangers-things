import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {loginUser, registerUser} from '../auth';
import './Login.css';



const Login = ({isLoggedIn, setIsLoggedIn, token, setToken, user, setUser}) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();
        // make an api call
        const userToAuth = {username, password};
        const data = await loginUser({user: userToAuth});
        // create loginUser function that we used above somewhere else
        // post to login function

       
        if (data.token) {
            console.log(data.token)
            setToken(token);
            setUser(data);
            setIsLoggedIn(true);
            navigate('/me');
            console.log(isLoggedIn)
        }
        setUsername('');
        setPassword('');
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const userToAuth = {username, password};
        const data = await registerUser({user: userToAuth});
      
        if (data && data.token) { // Check if data and data.token are defined
          setToken(data.token);
          setUser(data);
          setIsLoggedIn(true);
          setUsername(data.username)
          navigate('/me')
        } else {
          // Handle the case where data or data.token is undefined
          console.error('Error registering user:', data);
          // Display an error message or take other appropriate action
        }
      
        setUsername('');
        setPassword('');
      }
      
    return (
        <div>
            <form id='login-container'>
                <label>
                    Username
                    <input type='text' name='username' value={username} onChange={(event) => setUsername(event.target.value)} required />
                </label>
                <label>
                    Password
                    <input type='password' name='password' value={password} onChange={(event) => setPassword(event.target.value)} required />
                </label>
                <button type="submit" onClick={handleLogin}>Login</button>
                <button onClick={handleRegister}>Register</button>
            </form>
        </div>
    )
};

export default Login;
