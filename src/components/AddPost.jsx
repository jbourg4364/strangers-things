import React from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import {Posts} from './index'
import './AddPost.css';




const AddPost = ({posts, setPosts, title, setTitle, location, setLocation, price, setPrice}) => {

    return (
        <>
            <div>
                <form action="/posts"  id='addpost-container'>

//must return an object that looks like this to be passed to createNewPost(newPost, token): 
//CRUD OPPS P1 18:16
// newPost: {
//     title: '',
//     description: '',
//     price: '$00.00',
//     willDeliver: boolean
// }

//this is my attempt at doing this ^ ...but it will need to be moved inside the component so it can access props
const handleSubmit = () => {
    const checkYes = document.getElementById('checkYes'); 
    const checkNo = document.getElementById('checkNo');
    // even though we dont use this ^ i wonder if we might if we decide to check if both checkboxes are !checked since they don't have a required value
    let checkboxValue;

    {checkYes.checked ? 
        checkboxValue = true :
        checkboxValue = false
    }

    const newPost = {
        title: {title},
        description: {description},
        location: {location},
        price: {price},
        willDeliver: checkboxValue
    }

    return newPost
}

//createNewPost should be called when submit is clicked - button might need to be outside of form
//CRUD OPPS P1 14:57

const AddPost = ({posts, setPosts, title, setTitle, description, setDescription, location, setLocation, price, setPrice}) => {
    
    return (
        <>
            <div>
                {/* form action would be overwritten by submit button - submit will send name/value to server - any button in a form will be a submit button */}
                <form action=""  id='addpost'> 

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
                        will You Deliver?
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="">Yes</label>
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="">No</label>
                    </label>
                    <button>Submit</button>

                        <textarea name="" id="" cols="30" rows="10" onChange={(event) => setDescription(event.target.value)}></textarea>
                    </label>
                    <label htmlFor=""> 
                        Location
                        <input type="text" name="location" id="location" placeholder="City/State" onChange={(event) => setLocation(event.target.value)} required/>
                    </label>
                    <label htmlFor=""> 
                        Price
                        <input type="text" name="price" id="price" placeholder="$0.00" onChange={(event) => setPrice(event.target.value)} required/>
                    </label>
                    <label id="delivery" htmlFor=""> 
                        Will You Deliver?
                        <div id="checkboxes">
                            <div id="checkbox">
                                <input  type="checkbox" name="" id="checkYes"/>
                                <label htmlFor="">Yes</label>
                            </div>
                            <div id="checkbox">
                                <input type="checkbox" name="" id="checkNo"/> 
                                <label htmlFor="">No</label>
                            </div>
                        </div>
                    </label>
                    <button onClick={handleSubmit}>Submit</button>
                    {/*handleSubmit function above*/}

                </form>
            </div>

        </>
    )
}

export default AddPost;


//get button to onClick={() => populate state} and rerun Posts

//also pass props in App

//location - dont make it required - if its blank on submit then set location to  [ON REQUEST] - set value

