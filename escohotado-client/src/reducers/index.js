import { combineReducers } from "redux";
import articleReducer from "./article";

const rootReducer = combineReducers({
  article: articleReducer
});

export default rootReducer;
