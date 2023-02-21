import { combineReducers } from "redux";
import { historyReducer } from "./historyReducer";
import { questReducer } from "./questionReducer";
import { userReducer } from "./userReducer";
export default combineReducers({
  user: userReducer,
  questions: questReducer,
  history: historyReducer,
});
