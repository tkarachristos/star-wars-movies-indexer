import React from 'react';
import { connect } from 'react-redux';

import MoviesListFilter from "./MoviesListFilter";
import MoviesList from "./MoviesList";
import MovieDetails from "./MovieDetails";

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

class App extends React.Component {
    render () {
        var movieDetails = <div><p>No movie selected</p></div>
        
        if(this.props.selection > -1) {
            const selectedMovie = this.props.movies.find(function(movie) {
                return this.props.selection === movie.id;
            }.bind(this));

            const movieInfo = {
                title: selectedMovie.fields.title,
                opening_crawl: selectedMovie.fields.opening_crawl,
                director: selectedMovie.fields.director
            }

            movieDetails = <MovieDetails {...movieInfo} />
        }

        return (
            <div>
                <div className="search-ribbon">
                    <MoviesListFilter/>
                </div>
                <div className="list-area">
                    <Grid fluid={true}>
                        <Row justify="start">
                            <Col xs={6} sm={6} md={6} lg={6}>
                                <MoviesList
                                    searchText=""
                                    caseSensitiveMatch={false}
                                />
                            </Col>
                            <Col xs={6} sm={6} md={6} lg={6}>
                                {movieDetails}
                            </Col>
                        </Row>
                    </Grid>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        movies: state.movies.list,
        selection: state.movies.selection
    }
};

export default connect(
    mapStateToProps
)(App);
