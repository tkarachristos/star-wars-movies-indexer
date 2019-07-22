export const ACTIONS = {
    FETCH_MOVIES_PENDING: "FETCH_MOVIES_PENDING",
    FETCH_MOVIES_SUCCESS: "FETCH_MOVIES_SUCCESS",
    FETCH_MOVIES_ERROR: "FETCH_MOVIES_ERROR",
    MOVIE_SELECTED: "MOVIE_SELECTED"
}

export function fetchMoviesPending() {
    return {
        type: ACTIONS.FETCH_MOVIES_PENDING
    }
}

export function fetchMoviesSuccess(list) {
    return {
        type: ACTIONS.FETCH_MOVIES_SUCCESS,
        list
    }
}

export function fetchMoviesError(error) {
    return {
        type: ACTIONS.FETCH_MOVIES_ERROR,
        error
    }
}

export function movieSelected(id) {
    return {
        type: ACTIONS.MOVIE_SELECTED,
        id
    }
}