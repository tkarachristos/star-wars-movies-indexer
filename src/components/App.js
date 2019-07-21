import React from 'react';

import MoviesListFilter from "./MoviesListFilter";
import MoviesList from "./MoviesList";
import MovieDetails from "./MovieDetails";

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import movies from "../api/mockData.js";

export default class App extends React.Component {
    render () {
        const movie=movies[0];

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
                                <MovieDetails
                                    {...movie.fields}
                                />
                            </Col>
                        </Row>
                    </Grid>
                </div>
            </div>
        );
    }
}
