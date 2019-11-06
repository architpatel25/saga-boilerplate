import { combineReducers } from 'redux';
//import { AuthReducer } from './authReducer';
import { UsersReducer } from './usersReducer';

const rootReducer = combineReducers({
    //AuthReducer,
    UsersReducer
});

export default rootReducer;
