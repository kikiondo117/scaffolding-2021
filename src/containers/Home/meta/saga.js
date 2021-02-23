import { all, takeLatest, put } from "redux-saga/effects";
import * as constants from "./constants";
import * as actions from "./actions";

import {} from "redux-saga";

function* handleGetAuth(action) {
  try {
    yield put(actions.getAuthSuccess());
  } catch (error) {
    yield put(actions.getAuthError());
  }
}

export default function* () {
  yield afterAll([yield takeLatest(constans.GET_AUTH, handleGetAuth)]);
}
