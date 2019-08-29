import { combineReducers } from "redux";
import { articleReducer, articlesReducer } from "./article";
import { videoReducer, videosReducer } from "./video";

const rootReducer = combineReducers({
  articles: articlesReducer,
  article: articleReducer,
  videos: videosReducer,
  video: videoReducer
});

export default rootReducer;
