const COHORT_NAME = '2303-FTB-ET-WEB-FT';


const BASE = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

export const getPosts = async () => {
    try {
        const response = await fetch(`${BASE}/posts`);
        const data = await response.json();
        return (data.data.posts);
    } catch (error) {
    console.error(error);
    }
}; 

export const createNewPosts = async (newPost, token) => {
    try {
        const response = await fetch(`${BASE}/posts`, {
            method: 'POST',
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                //Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(newPost)
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
                //Authorization: `Bearer ${token}`
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

