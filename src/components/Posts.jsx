import React, {useEffect} from "react";
import { getPosts } from "../api";

const Posts = ({posts, setPosts, isLoggedIn, user}) => {
   
    useEffect(() => {
        const getAllPosts = async () => {
            const response = await getPosts();
            setPosts(response)
            console.log(posts)
            
        };
        getAllPosts();
    }, []);

    return (
        <>
            <h1>hello from posts</h1>
            {posts.map((post) => {
                return (
                    <div key={post._id}>
                        <h1>{post.title}</h1>
                        <p>{post.description}</p>
                        <p>{post.author.username}</p>
                        <p>{post.location}</p>
                        <p>{post.price}</p>
                        {/* {post.willDeliver ? 
                        <>
                        <p>Delivery Available</p> 
                        </>: 
                        <>
                        <p>Delivery Not Available</p>
                        </>} */}{console.log(post.willDeliver)}
                    </div>
                    )
                

            })}
        </>
    )
}

export default Posts;