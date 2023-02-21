import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import axiosInstance from "../utils/axiosInstance";

function* loadHistory({ payload }) {
  try {
    const res = yield call(axiosInstance, {
      method: "GET",
      url: `660/history?userId=${payload.id}`,
    });

    yield put({
      type: "LOAD_HISTORY_SUCCESS",
      payload: res,
    });
  } catch (error) {}
}

function* loadHistoryRequest() {
  yield takeLatest("LOAD_HISTORY_REQUEST", loadHistory);
}

export default function* rootHistorySaga() {
  yield all([fork(loadHistoryRequest)]);
}
