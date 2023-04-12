import React, {useEffect} from "react";
import { createNewPosts, getPosts } from "../api";
import { Routes, Route, useNavigate } from 'react-router-dom';
import { AddPost } from './index';
import "./Post.css";

const Posts = ({posts, setPosts, isLoggedIn, user, token, setToken}) => {
   
    useEffect(() => {
        const getAllPosts = async () => {
            const response = await getPosts();
            setPosts(response)
        };
        getAllPosts();
    }, []);
    const navigate = useNavigate();
    return (
        <>
            <h2>All Posts</h2>
            <button onClick={() => {
                navigate('/addPost')
                //only show posts they are the author of (using filter)
            }}>Add Post</button>
            <button>Edit Post</button>
            <button>Delete Post</button>
            
            {posts.map((post) => {
                return (
                    <div className="post" key={post._id}>
                        <h2>{post.title}</h2>
                        <p>{post.description}</p>
                        <p>Posted By: {post.author.username}</p>
                        <p>Location: {post.location}</p>
                        <p>Price: {post.price}</p>
                        {post.willDeliver ? 
                        <>
                        <p>Delivery Available</p> 
                        </>: 
                        <>
                        <p>Delivery Not Available</p>
                        </>}

                    </div>
                    )
                

            })}
        </>
    )
}

export default Posts;