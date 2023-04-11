import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header, Login, Home, Posts} from './index';


const App = () => {
    const [user, setUser] = useState({});
    const [posts, setPosts] = useState([]);
    const [token, setToken] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div id='App'>
            <Header />
            <Routes>
                <Route path='/' element={<Home user={user} />} />
                <Route path='/login' element={<Login user={user} setUser={setUser} token={token} setToken={setToken} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
                <Route path='/posts' element={<Posts posts={posts} setPosts={setPosts} />} />
                {/* <Route path='/register' element={<Register />} /> */}
            </Routes>
        </div>
    )
};

export default App;