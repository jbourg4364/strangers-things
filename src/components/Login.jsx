import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {loginUser} from '../auth';
import './Login.css';

//to get fake user data for testing:

// const fakeUser = {
//     posts:[],
//     messages: [],
    
// }
// JSON.parse(fakeUser)
// const fakeResposne = {

// }
// JSON.parse(fakeResponse)

const Login = ({isLoggedIn, setIsLoggedIn, token, setToken, user, setUser}) => {


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    console.log(username);
    // see the username change in real time in the console if you type
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        // make an api call
        const userToAuth = {user: {username, password}};
        const data = loginUser(userToAuth);
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


    return (
        <div>
            <form onSubmit={handleSubmit} id='login-container'>
                <label>
                    Username
                    <input type='text' name='username' value={username} onChange={(event) => setUsername(event.target.value)} required />
                </label>
                <label>
                    Password
                    <input type='text' name='password' value={password} onChange={(event) => setPassword(event.target.value)} required />
                </label>
                <button type="submit" onClick={handleSubmit}>Login</button>
                <button>Register</button>
                {/* add a register button to login - if its clicked then route to register */}
            </form>
        </div>
    )
};

export default Login;




