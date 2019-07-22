import { ACTIONS } from "../actions/movies";
import initialState from "./initialState";

export function moviesReducer(state = initialState.movies, action) {
    switch(action.type) {
        case ACTIONS.FETCH_MOVIES_PENDING:
            return {
                ...state,
                pending: true
            }
        case ACTIONS.FETCH_MOVIES_SUCCESS:
            return {
                ...state, 
                list: action.list,
                pending: false
            }
        case ACTIONS.FETCH_MOVIES_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        case ACTIONS.MOVIE_SELECTED:
            return {
                ...state,
                selection: action.id
            }    
        default: 
            return state;
  }
}
