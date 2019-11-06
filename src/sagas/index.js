import { put, takeLatest, call, take, takeEvery, all } from 'redux-saga/effects';
import { config } from '../utils/constants';

function* getAllGithubUsers() {
    const users = yield fetch(config.GITHUB_API_URL + 'users')
        .then(response => response.json())
        .then(response => {
            return response;
        });
    console.log('users', users)

    yield put({ type: "GET_ALL_USERS", users });
}

function* callUsersAPI() {
    yield call('GET_ALL_USERS', getAllGithubUsers);
}

export default function* rootSaga() {
    yield all([
        callUsersAPI()
    ]);
}
