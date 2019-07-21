import {fetchMoviesPending, fetchMoviesSuccess, fetchMoviesError} from './moviesApi';

function fetchMovies() {
    return dispatch => {
        dispatch(fetchMoviesPending());
        fetch('https://star-wars-api.herokuapp.com/films')
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchMoviesSuccess(res));
            return res;
        })
        .catch(error => {
            dispatch(fetchMoviesError(error));
        })
    }
}

export default fetchMovies;