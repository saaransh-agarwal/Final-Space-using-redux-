import { FETCH_POSTS_SUCCESS, FETCH_POSTS_REQUEST,FETCH_POSTS_FAILURE } from './Posttypes'
import axios from 'axios'

export const fetchpostsRequest = () => {
    return {
        type: FETCH_POSTS_REQUEST
    }
}

export const fetchpostsSuccess = (posts) => {
    return {
        type: FETCH_POSTS_SUCCESS,
        payload: posts
    }
}

export const fetchpostsFailure = (error) => {
    return {
        type: FETCH_POSTS_FAILURE,
        payload: error
    }
}

export const fetchposts = () => {
    return (dispatch) => {
        dispatch(fetchpostsRequest)
        axios.get('https://finalspaceapi.com/api/v0/character/')
            .then(response => {
                const posts = response.data
                dispatch(fetchpostsSuccess(posts))
            })
            .catch(error => {
                const errMsg = error.message
                dispatch(fetchpostsFailure(errMsg))
            })
    }
}