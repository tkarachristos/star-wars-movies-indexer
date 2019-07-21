import React from 'react';

import MoviesListFilter from "./MoviesListFilter";
import MoviesList from "./MoviesList";

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

export default class App extends React.Component {
    render () {
        return (
            <div>
                <div className="search-ribbon">
                    <MoviesListFilter/>
                </div>
                <div className="list-area">
                    <Grid fluid={true}>
                        <Row justify="start">
                            <Col xs={7} sm={7} md={7} lg={7}>
                                <MoviesList
                                    searchText=""
                                    caseSensitiveMatch={false}
                                />
                            </Col>
                            <Col xs={5} sm={5} md={5} lg={5}>
                                <div><h1>Movie Details</h1></div>
                            </Col>
                        </Row>
                    </Grid>
                </div>
            </div>
        );
    }
}
