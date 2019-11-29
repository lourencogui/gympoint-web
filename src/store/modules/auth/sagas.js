import { takeLatest, call, all } from 'redux-saga/effects';

export function* signIn({ payload }) {
  yield call(console.log, 'ok');
}

export default all([takeLatest('@auth/signInRequest', signIn)]);
