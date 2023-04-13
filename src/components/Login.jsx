import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {loginUser, registerUser} from '../auth';
import './Login.css';



const Login = ({isLoggedIn, setIsLoggedIn, token, setToken, user, setUser}) => {


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    console.log(username);
    // see the username change in real time in the console if you type
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();
        // make an api call
        const userToAuth = {user: {username, password}};
        const data = await loginUser(userToAuth);
        // create login user functin that we used above somewhere else
        // post to login function
        if (data.token) {
            setToken(data.token);
            setUser(data);
            setIsLoggedIn(true);
        }
        setUsername('');
        setPassword('');
        navigate('/posts')
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        // make an api call
        const userToAuth = {user: {username, password}};
        const data = registerUser(userToAuth);
        // create login user functin that we used above somewhere else
        // post to login function
        if (data.token) {
            setToken(data.token);
            setUser(data);
            setIsLoggedIn(true);
        }
        setUsername('');
        setPassword('');
        navigate('/me')
    }
//set userobj to username and password, send it back to register + call registeruser 

    return (
        <div>
            <form id='login-container'>
                <label>
                    Username
                    <input type='text' name='username' value={username} onChange={(event) => setUsername(event.target.value)} required />
                </label>
                <label>
                    Password
                    <input type='text' name='password' value={password} onChange={(event) => setPassword(event.target.value)} required />
                </label>
                <button type="submit" onClick={handleLogin}>Login</button>
                <button onClick={handleRegister}>Register</button>
                {/* add a register button to login - if its clicked then route to register */}
            </form>
        </div>
    )
};

export default Login;
