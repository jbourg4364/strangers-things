import React from 'react';
import ReactDOM from 'react-dom';
import { Header, Login } from './components';

const App = () => {
    return (
        <div id='App'>
            <Header />
            <Login />
        </div>
    )
};


ReactDOM.render(
    <App />,
    document.getElementById('root')
);