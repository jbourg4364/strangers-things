import React from 'react';
import './Login.css'

const Login = () => {
    return (
        <div>
            <form id='login-container'>
                <label>
                    Username
                    <input type='text' name='username' />
                </label>
                <label>
                    Password
                    <input type='text' name='password' />
                </label>
                <button>Login</button>
            </form>
        </div>
    )
};

export default Login;