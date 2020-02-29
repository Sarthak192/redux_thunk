import jsonPlaceHolder from '../api/jsonPlaceHolder';
import _ from 'lodash';

export const fetchPosts = () => {
    return async function(dispatch, getState){
        const results = await jsonPlaceHolder.get("/posts")
        dispatch({type: "FETCH_POST", payload: results.data})
    }    
}

export const fetchUser = (id) => {
    return function(dispatch, getState){
       _fetchUser(id, dispatch, getState) 
    }
}

const _fetchUser = _.memoize(async (id, dispatch, getState) => {
    const results = await jsonPlaceHolder.get(`/users/${id}`)
    dispatch({type: "FETCH_USER", payload: results.data})
})
