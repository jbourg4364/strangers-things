import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Profile.css";
import { Login } from './index';


const Profile = ({ posts, userData, setUserData, token, isLoggedIn }) => {
    
    return (
      <>
        {!isLoggedIn ? (
          <Login />
        ) : (
          <div>
            <h3 className='h3profile'>Welcome to Your Profile!</h3>
            
            <h3 className='h3profile'>My Messages:</h3>
            <h4 className='h4profile'>No Messages to Display!</h4>
            <h3 className='h3profile'>All Posts</h3>
            <ul>
              {posts.map((post) => (
                <li key={post.id}>{post.title}</li>
              ))}
            </ul>
          </div>
        )}
      </>
    );
  };
  



export default Profile;