import React, {useState} from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import {Posts} from './index'
import './AddPost.css';
import { createNewPosts } from "../api";

//must return an object that looks like this to be passed to createNewPost(newPost, token): 
//CRUD OPPS P1 18:16
// newPost: {
//     title: '',
//     description: '',
//     price: '$00.00',
//     willDeliver: boolean
// }

//createNewPost should be called when submit is clicked - button might need to be outside of form
//CRUD OPPS P1 14:57

const AddPost = ({posts, setPosts, token}) => {
    
    
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [price, setPrice] = useState('');
    const [willDeliver, setWillDeliver] = useState(false);
    


    //     const checkYes = document.getElementById('checkYes'); 
    //     const checkNo = document.getElementById('checkNo');
    //     // even though we dont use this ^ i wonder if we might if we decide to check if both checkboxes are !checked since they don't have a required value
  
    //     if (checkYes.checked) {
    //         setCheckboxValue(true)
    //     } else {
    //         setCheckboxValue(false)        
    //     }



    // const handleSubmit = () => {

    
        const post = {
            title,
            description,
            location,
            price,
            willDeliver
        }
    
    //     return newPost
    // }


    const navigate = useNavigate();
    // createNewPosts(newPost, token)


    const handleSubmit = async(event) => {
        event.preventDefault();
        const newPost = await createNewPosts(post, token);
        setPosts([newPost.data, ...posts]);
        console.log({posts})
    }
    
    return (
        <>
            <div>
                {/* form action would be overwritten by submit button - submit will send name/value to server - any button in a form will be a submit button */}
                <form action="" onSubmit={handleSubmit} id='addpost'> 
                    <h1>Create New Post</h1>
                    <label htmlFor=""> 
                        Title
                        <input type="text" name="title" id="title" onChange={(event) => setTitle(event.target.value)} required/>
                    </label>
                    <label id="description" htmlFor=""> 
                        Item Description
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
                                <input  type="checkbox" name="" id="checkYes" onChange={(event) => setWillDeliver(event.target.checked)}/>
                                <label htmlFor="">Yes</label>
                            </div>
                            {/* <div id="checkbox">
                                <input type="checkbox" name="" id="checkNo" onChange={(event) => setCheckboxValue(event.target.checked)}/> 
                                <label htmlFor="">No</label>
                            </div> */}
                        </div>
                    </label>
                    <button type="submit">Submit</button>
                    {/*handleSubmit function above*/}
                </form>
            </div>

        </>
    )
}

export default AddPost;
//crud ops p2 20:45

//get button to onClick={() => populate state} and rerun Posts
//location - dont make it required - if its blank on submit then set location to  [ON REQUEST] - set value