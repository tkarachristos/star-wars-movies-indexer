import {FETCH_MOVIES_PENDING, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_ERROR} from "../actions/moviesApi";
import initialState from "./initialState";

export function apiReducer(state = initialState.movies, action) {
    switch(action.type) {
        case FETCH_MOVIES_PENDING:
            return {
                ...state,
                pending: true
            }
        case FETCH_MOVIES_SUCCESS:
            return {
                ...state, 
                list: action.list,
                pending: false
            }
        case FETCH_MOVIES_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
      default: 
          return state;
  }
}

export const getMovies = state => state.movies.list;
export const getMoviesPending = state => state.movies.pending;
export const getMoviesError = state => state.movies.error;