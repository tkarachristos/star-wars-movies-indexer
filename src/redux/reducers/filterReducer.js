import {SET_TEXT_FILTER, SET_SORT_FILTER} from "../actions/moviesFilter";
import initialState from "./initialState";

export function filterReducer(state = initialState.filter, action) {
    switch(action.type) {
        case SET_TEXT_FILTER:
            return {
                ...state,
                searchText: action.searchText
            }
        case SET_SORT_FILTER:
            return {
                ...state,
                sortBy: action.sortBy
            }
        default: 
            return state;
  }
}
