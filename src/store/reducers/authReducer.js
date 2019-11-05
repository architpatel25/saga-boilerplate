import * as ACTION_TYPES from '../actions/actionTypes';

export const initialState = {
    is_authenticated: false,
    loading: false,
    profile: null
}

export function AuthReducer(state = initialState, action) {
    switch (action.type) {
        case ACTION_TYPES.GET_NEWS:
            return {
                ...state,
                loading: true
            }
        case ACTION_TYPES.NEWS_RECEIVED:
            return {
                ...state,
                news: action.json[0], loading: false
            }
        case ACTION_TYPES.LOGIN_SUCCESS:
            return {
                ...state,
                is_authenticated: true
            }
        case ACTION_TYPES.LOGIN_FAILURE:
            return {
                ...state,
                is_authenticated: false
            }
        case ACTION_TYPES.ADD_PROFILE:
            return {
                ...state,
                profile: action.payload
            }
        case ACTION_TYPES.REMOVE_PROFILE:
            return {
                ...state,
                profile: null
            }
        default:
            return state
    }
}
