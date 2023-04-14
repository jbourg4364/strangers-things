import React, {useEffect} from "react";
import { createNewPosts, getPosts } from "../api";
import { Routes, Route, useNavigate } from 'react-router-dom';
import { AddPost, Login } from './index';
import "./Post.css";

//if logged in 
    //map all posts 
        //if isAuthor 
            //add the edit and delete buttons to the post


const Posts = ({posts, setPosts, isLoggedIn, setIsLoggedIn, user, username, token, setToken}) => {
    // setIsLoggedIn(true);
    useEffect(() => {
        const getAllPosts = async () => {
            const response = await getPosts();
            setPosts(response)
        };
        getAllPosts();
    }, []);
    const navigate = useNavigate();
    console.log(username)
    return (
        <>
           <h2>All Posts</h2>
           <div className="buttons">
                <button onClick={() => {
                    navigate('/addPost')
                }}>Add Post</button>
                <button>Edit Post</button>
                <button>Delete Post</button>
           </div>
           {posts.map((post) => {
            // {
            //     console.log(post, "post message");
            // }
               return (
                
                   <div className="post" key={post._id}>
                       <h2>{post.title}</h2>
                       <p>{post.description}</p>
                       {/* <p>Posted By: {post.author.username}</p> */}
                       <p>Location: {post.location}</p>
                       <p>Price: {post.price}</p>
                       {post.willDeliver ? 
                       <>
                       <p>Delivery Available</p> 
                       </>: 
                       <>
                       <p>Delivery Not Available</p>
                       </>}

                    {/* {(isLoggedIn && user.userName == post.author.username) ?(
                
                        <>
                        <button>Edit Post</button>
                        <button>Delete Post</button>
                        </>
                    ):
                    console.log('error')
                    } */}
                    
                   </div>
                )
           })} 
        </>
    )
}

export default Posts;


// Text Matcher
    // Add within div 
//       <form>
//         <input type-"search"/>
//      </form>>