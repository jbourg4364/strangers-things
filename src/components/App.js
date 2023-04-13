import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header, Login, Home, Posts, AddPost} from './index';


const App = () => {
    const [user, setUser] = useState({});
    const [posts, setPosts] = useState([]);
    const [token, setToken] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [price, setPrice] = useState('');


    return (
        <div id='App'>
            <Header />
            <Routes>
                <Route path='/' element={<Home user={user} />} />
                <Route path='/login' element={<Login user={user} setUser={setUser} token={token} setToken={setToken} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
                <Route path='/posts' element={<Posts posts={posts} setPosts={setPosts} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>} />
                <Route path='/addPost' element={<AddPost posts={posts} setPosts={setPosts} title={title} setTitle={setTitle} description={description} setDescription={setDescription} location={location} setLocation={setLocation} price={price} setPrice={setPrice}/>}/>
                {/* <Route path='/register' element={<Register />} /> */}
            </Routes>
        </div>
    )
};

export default App;