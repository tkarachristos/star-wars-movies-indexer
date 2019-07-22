import { combineReducers } from "redux";
import { filterReducer } from "./filterReducer";
import { moviesReducer } from "./moviesReducer";

const rootReducer = combineReducers({
  filter: filterReducer,
  movies: moviesReducer
});

export default rootReducer;
