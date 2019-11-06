import * as ACTION_TYPES from '../actions/actionTypes';

export const initialState = {
    users: [], loading: false
}

export function UsersReducer(state = initialState, action) {
    console.log('users action', action, state)
    switch (action.type) {
        case ACTION_TYPES.GET_ALL_USERS:
            return {
                ...state, users: action.users
            }
        default:
            return state
    }
}
