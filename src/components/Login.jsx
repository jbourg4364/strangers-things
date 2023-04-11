import React from 'react';
import './Login.css'

const Login = () => {
    return (
        <div>
            <form id='login-container'>
                <label>
                    Username
                    <input type='text' name='username' required />
                </label>
                <label>
                    Password
                    <input type='text' name='password' required />
                </label>
                <button>Login</button>
            </form>
        </div>
    )
};

export default Login;