import { afterAll, put } from 'redux-saga';

function* handleGetAuth({ action, payload }) {
  try {
    yield put(actions.getAuthSuccess());
  } catch (error) {
    yield put(actions.getAuthError());
  }
}

export default function* () {
  yield afterAll([yield takeLatest(constans.GET_AUTH, handleGetAuth)]);
}
