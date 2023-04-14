const COHORT_NAME = '2303-FTB-ET-WEB-FT';


const BASE = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

// const fakePosts = {
//     "success": true,
//     "error": null,
//     "data": {
//     "posts": [
//     {
//     "location": "[On Request]",
//     "willDeliver": false,
//     "messages": [],
//     "active": true,
//     "_id": "642762a8cd3bfb001620064e",
//     "author": {
//     "_id": "642762a8cd3bfb0016200648",
//     "username": "joe1234"
//     },
//     "cohort": "642762a8cd3bfb0016200646",
//     "title": "Practically new Stradivarius",
//     "description": "I've really only used this three or four times.  I thought it would be a good purchase, shows what I know.",
//     "price": "$14.3 million",
//     "createdAt": "2023-03-31T22:46:00.837Z",
//     "updatedAt": "2023-03-31T22:46:00.880Z",
//     "__v": 0,
//     "isAuthor": false
//     },
//     {
//     "location": "[On Request]",
//     "willDeliver": true,
//     "messages": [],
//     "active": true,
//     "_id": "642762a8cd3bfb001620064f",
//     "author": {
//     "_id": "642762a8cd3bfb0016200649",
//     "username": "jane1234"
//     },
//     "cohort": "642762a8cd3bfb0016200646",
//     "title": "Golden Retriever puppies",
//     "description": "Not looking for any money, just want to find a good home for these four beautiful pups.",
//     "price": "free",
//     "createdAt": "2023-03-31T22:46:00.837Z",
//     "updatedAt": "2023-03-31T22:46:00.886Z",
//     "__v": 0,
//     "isAuthor": false
//     },
//     {
//     "location": "Ames, IA",
//     "willDeliver": true,
//     "messages": [],
//     "active": true,
//     "_id": "642762a8cd3bfb0016200650",
//     "author": {
//     "_id": "642762a8cd3bfb001620064a",
//     "username": "caesar1234"
//     },
//     "cohort": "642762a8cd3bfb0016200646",
//     "title": "NordicTrack Freestrider Elliptical Trainer",
//     "description": "To be honest, it is more amazing than my resolve.",
//     "price": "$1400, OBO",
//     "createdAt": "2023-03-31T22:46:00.837Z",
//     "updatedAt": "2023-03-31T22:46:00.891Z",
//     "__v": 0,
//     "isAuthor": false
//     }
//     ]
//     }
//     };

export const getPosts = async () => {
    try {
        const response = await fetch(`${BASE}/posts`);
        const data = await response.json();
        //  const data = await fakePosts.json();
        return (data.data.posts);
        // return (fakePosts.data.posts);
    } catch (error) {
    console.error(error);
    }
}; 

export const createNewPosts = async (newPost, token) => {
    console.log(newPost, token)
    try {
        const response = await fetch(`${BASE}/posts`, {
            method: 'POST',
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({post: newPost})
        });

        const result = await response.json();
        console.log(result);
        return result;
    } catch (error) {
        console.error(error);
    }
}; //tie newPosts to button in Posts

export const updatePost = async (postId, post, token) => {
    try {
        const response = await fetch(`${BASE}/posts/${postId}`, {
            method: 'PUT',
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(post)
        });

        const result = await response.json();
        return result;
    } catch (error) {
    console.error(error);
    }
};


// const registerUser = async () => {
//     try { 
//         //check if user already exists
//         //if no exisiting user, add the new user info to state
//     } catch (error) {
//         console.log('error');
//     }
// }

// const loginUser = async () => {
//     try { 
//         //check if user exists in state
//         //if username and password match, route to homepage
//     } catch (error) {
//         console.log('error');
//     }
// }

