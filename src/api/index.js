const COHORT_NAME = '2303-FTB-ET-WEB-FT';


const BASE = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;


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



