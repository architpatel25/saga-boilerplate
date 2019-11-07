import * as ACTION_TYPES from './actionTypes'

//get all users action
export const getAllUsers = () => {
    return {
        type: ACTION_TYPES.GET_ALL_USERS,
    }
}

//delete user action
export const deleteUser = () => {
    return {
        type: ACTION_TYPES.DELETE_USER
    }
}

export const SUCCESS = {
    type: ACTION_TYPES.SUCCESS
}

export const FAILURE = {
    type: ACTION_TYPES.FAILURE
}
