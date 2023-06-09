import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header, Login, Home, Posts, AddPost, Profile} from './index';


const App = () => {
    const [user, setUser] = useState({});
    const [userData, setUserData] = useState({});
    const [posts, setPosts] = useState([]);
    const [token, setToken] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    useEffect(() => {
        if(token) {
            setIsLoggedIn(true);
        }
    })


    return (
        <div id='App'>
            <Header token={token} setToken={setToken} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
            <Routes>
                <Route path='/' element={<Home user={user} />} />
                <Route path='/login' element={<Login user={user} setUser={setUser} token={token} setToken={setToken} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} username={username} setUsername={setUsername} password={password} setPassword={setPassword}/>} />
                <Route path='/posts' element={<Posts posts={posts} setPosts={setPosts} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} user={user} username={username} setUsername={setUsername}/>} />
                <Route path='/addPost' element={<AddPost user={user} posts={posts} setPosts={setPosts} token={token}/>}/>
                <Route path='/me' element={<Profile userData={userData} setUserData={setUserData} token={token} posts={posts} isLoggedIn={isLoggedIn} setToken={setToken}/>} />
                <Route path='/profile' element={<Profile userData={userData} setUserData={setUserData} token={token} posts={posts} isLoggedIn={isLoggedIn}/>} />
            </Routes>
        </div>
    )
};

export default App;


