import { put, takeLatest, all } from 'redux-saga/effects';
import { config } from '../utils/constants';

function* getAllGithubUsers() {
    const users = yield fetch(config.GITHUB_API_URL + 'users')
        .then(response => response.json())
        .then(response => {
            return response;
        });
    yield put({ type: "GET_ALL_USERS_REQUEST", users });
}

function* callUsersAPI() {
    return yield takeLatest('GET_ALL_USERS', getAllGithubUsers);
}

// function* deleteUser(id) {
//     console.log('Before delete', id)
//     const deletedUser = yield fetch('')
//         .then(response => response.json())
//         .then((response) => {
//             return response;
//         });

//     yield put({ type: "DELETE_USER_REQUEST", deletedUser });
// }

// function* callDeleteUserAPI({ id }) {
//     return yield takeLatest('DELETE_USER', deleteUser(id));
// }

export default function* rootSaga() {
    yield all([
        callUsersAPI(),
        // callDeleteUserAPI()
    ]);
}
