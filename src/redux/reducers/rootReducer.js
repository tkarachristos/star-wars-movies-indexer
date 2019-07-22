import { combineReducers } from "redux";
import { filterReducer } from "./filterReducer";
import { apiReducer } from "./apiReducer";

const rootReducer = combineReducers({
  filter: filterReducer,
  movies: apiReducer
});

export default rootReducer;
