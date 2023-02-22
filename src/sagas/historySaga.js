import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import axiosInstance from "../utils/axiosInstance";

function* loadHistory({ payload }) {
  try {
    const res = yield call(axiosInstance, {
      method: "GET",
      url: `answers/history?userId=${payload._id}`,
    });
    yield put({
      type: "LOAD_HISTORY_SUCCESS",
      payload: res,
    });
  } catch (error) {
    console.log(error);
  }
}

function* submitAnswer({ payload }) {
  try {
    const res = yield call(axiosInstance, {
      method: "POST",
      url: "answers/submitAnswer",
      data: payload,
    });

    yield put({
      type: "SUBMIT_ANSWERS_SUCCESS",
      payload: res,
    });
  } catch (error) {
    console.log(error);
  }
}

function* submitAnswerRequest() {
  yield takeLatest("SUBMIT_ANSWERS_REQUEST", submitAnswer);
}

function* loadHistoryRequest() {
  yield takeLatest("LOAD_HISTORY_REQUEST", loadHistory);
}

export default function* rootHistorySaga() {
  yield all([fork(loadHistoryRequest), fork(submitAnswerRequest)]);
}
