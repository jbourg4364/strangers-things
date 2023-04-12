import React, {useEffect} from "react";
import { getPosts } from "../api";
import "./Post.css";

const Posts = ({posts, setPosts, isLoggedIn, user}) => {
   
    useEffect(() => {
        const getAllPosts = async () => {
            const response = await getPosts();
            setPosts(response)
        };
        getAllPosts();
    }, []);

    return (
        <>
            <h2>All Posts</h2>
            {posts.map((post) => {
                return (
                    <div className="post" key={post._id}>
                        <h2>{post.title}</h2>
                        <p>{post.description}</p>
                        <p>{post.author.username}</p>
                        <p>{post.location}</p>
                        <p>{post.price}</p>
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