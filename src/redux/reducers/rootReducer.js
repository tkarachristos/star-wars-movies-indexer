import { combineReducers } from "redux";
import { apiReducer } from "./apiReducer";
import { filterReducer } from "./filterReducer";

const rootReducer = combineReducers({
  filter: filterReducer,
  movies: apiReducer
});

export default rootReducer;
