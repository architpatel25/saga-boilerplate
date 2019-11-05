import { AuthReducer } from './authReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    AuthReducer,
});

export default rootReducer;
