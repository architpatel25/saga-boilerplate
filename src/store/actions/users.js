import axios from 'axios';
import { FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS } from './actionTypes';

// used by standard redux
export function fetchPosts() {
    return (dispatch) => {
        dispatch({ type: FETCH_POSTS_REQUEST });
        axios
            .get('https://api.github.com/users?page=1&per_page=10')
            .then(({ data }) => dispatch({ type: FETCH_POSTS_SUCCESS, payload: data }));
    };
}

// used by redux-saga
export function fetchPostsApi() {
    return axios.get('https://api.github.com/users?page=1&per_page=10').then(({ data }) => data);
}
