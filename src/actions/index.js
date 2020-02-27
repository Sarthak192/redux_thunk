import jsonPlaceHolder from '../api/jsonPlaceHolder';

export const fetchPosts = () => {
    return async function(dispatch, getState){
        const results = await jsonPlaceHolder.get("/posts")
        dispatch({type: "FETCH_POST", payload: results.data})
    }    
}

export const fetchUser = (id) => {
    return async function(dispatch, getState){
        const results = await jsonPlaceHolder.get(`/users/${id}`)
        dispatch({type: "FETCH_USER", payload: results.data})
    }
}