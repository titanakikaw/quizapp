import { combineReducers } from "redux";
import { errorReducer } from "./errorReducer";
import { historyReducer } from "./historyReducer";
import { loadingReducer } from "./loadingReducer";
import { questReducer } from "./questionReducer";
import { userReducer } from "./userReducer";
export default combineReducers({
  user: userReducer,
  questions: questReducer,
  history: historyReducer,
  loading: loadingReducer,
  errors: errorReducer,
});
