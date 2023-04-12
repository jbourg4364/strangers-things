import React from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import {Posts} from './index'
import './AddPost.css';



const AddPost = ({posts, setPosts, title, setTitle, location, setLocation, price, setPrice}) => {

    return (
        <>
            <div>
                <form action="/posts"  id='addpost-container'>
                    <h1>Create New Post</h1>
                    <label htmlFor=""> 
                        Title
                        <input type="text" name="title" id="title" onChange={(event) => setTitle(event.target.value)} required/>
                    </label>
                    <label id="description" htmlFor=""> 
                        Item Description
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </label>
                    <label htmlFor=""> 
                        Location
                        <input type="text" name="location" id="location" onChange={(event) => setLocation(event.target.value)} required/>
                    </label>
                    <label htmlFor=""> 
                        Price
                        <input type="text" name="price" id="price" onChange={(event) => setPrice(event.target.value)} required/>
                    </label>
                    <label id="delivery" htmlFor=""> 
                        Will You Deliver?
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="">Yes</label>
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="">No</label>
                    </label>
                    <button>Submit</button>
                </form>
            </div>

        </>
    )
}

export default AddPost;


//get button to onClick={() => populate state} and rerun Posts
//also pass props in App