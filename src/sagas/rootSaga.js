import { all, fork } from "redux-saga/effects";
import rootAuthSaga from "./authSaga";
import rootHistorySaga from "./historySaga";
import rootQuestion from "./questionSaga";

export default function* rootSaga() {
  yield all([fork(rootAuthSaga), fork(rootQuestion), fork(rootHistorySaga)]);
}
