import { put, call, takeEvery, takeLatest } from 'redux-saga/effects'
import { config } from '../../utils/constants';

function* getAllGithubUsers() {
    console.log('getAllGithubUsers called')
    const users = yield fetch(config.GITHUB_API_URL + 'users?page=1&per_page=10')
        .then(response => response.json());
    console.log('users', users)

    yield takeLatest({ type: "GET_ALL_USERS", users })
}

export function* callUsersAPI() {
    console.log('callUsersAPI called')
    yield call('GET_ALL_USERS', getAllGithubUsers)
}
