import { combineReducers } from "redux";
import { articleReducer, articlesReducer } from "./article";
import { videoReducer, videosReducer } from "./video";
import { sessionReducer } from "./session";

const rootReducer = combineReducers({
  session: sessionReducer,
  articles: articlesReducer,
  article: articleReducer,
  videos: videosReducer,
  video: videoReducer
});

export default rootReducer;
