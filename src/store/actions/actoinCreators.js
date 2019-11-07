import {
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_ERROR,
    FILTER_POSTS,
    FETCH_POSTS_REQUEST,
    FILTER_CHANGED,
} from './actionTypes';

export const postsReceived = posts => ({ type: FETCH_POSTS_SUCCESS, payload: posts });

export const postsFailed = error => ({ type: FETCH_POSTS_ERROR, error });

export const filterPosts = filteredPosts => ({ type: FILTER_POSTS, payload: filteredPosts });

export const filterChanged = name => ({ type: FILTER_CHANGED, name });

export const fetchPosts = () => ({ type: FETCH_POSTS_REQUEST });
