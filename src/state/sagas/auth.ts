import {put, takeEvery, CallEffect, PutEffect} from 'redux-saga/effects';

interface LoginAction {
  type: string;
  payload: {
    username: string;
    password: string;
  };
}

function* loginUser(
  action: LoginAction,
): Generator<CallEffect | PutEffect, void, unknown> {
  try {
    if (
      action.payload.username === 'test' &&
      action.payload.password === 'test'
    ) {
      yield put({type: 'LOGIN_SUCCESS', payload: {token: 'mocked_token'}});
    } else {
      yield put({type: 'LOGIN_FAILURE', error: 'Invalid credentials'});
    }
  } catch (error) {
    yield put({type: 'LOGIN_FAILURE', error});
  }
}

function* watchLoginUser() {
  yield takeEvery('LOGIN_REQUEST', loginUser);
}

export default watchLoginUser;
