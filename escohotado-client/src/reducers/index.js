import { combineReducers } from "redux";
import { articleReducer, articlesReducer } from "./article";

const rootReducer = combineReducers({
  articles: articlesReducer,
  article: articleReducer
});

export default rootReducer;
