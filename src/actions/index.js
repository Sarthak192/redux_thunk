import jsonPlaceHolder from '../api/jsonPlaceHolder';

export const fetchPosts = async () => {
    // Bad Approach
    const results = await jsonPlaceHolder.get("/posts")

    return {
        type: "FETCH_POSTS", 
        payload: results
    }
}