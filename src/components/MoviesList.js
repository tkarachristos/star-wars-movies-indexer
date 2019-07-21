import React from 'react';
// import { connect } from 'react-redux';
import movies from "../api/mockData.js";

import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';

import Movie from './Movie';

export default class MoviesList extends React.Component {

    constructor(props) {
        super(props);
    }

    /**
     * Adopted from jquery.searcher plugin
     * @param text
     */
    escapeRegExp(text){
        // see https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions
        return text.replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1");
    }

    /**
     * Adopted from jquery.searcher plugin.
     * @param value
     * @returns {RegExp}
     */
    buildRegex(value){
        // build the regular expression for searching
        let flags = "gm" + (!this.props.caseSensitiveMatch ? "i" : "");
        return new RegExp("(" + this.escapeRegExp(value) + ")", flags);
    }

    render(){
        const regex = this.buildRegex(this.props.searchText);

        const moviesList = movies.map(function(movie) {
            // const moviesList = this.props.movies.map(function(movie) {

            let itemContainsText = !!movie.fields.title.match(regex);

            if (itemContainsText){
                return (
                    <ListGroupItem action>
                        <Movie
                            key={movie.id}
                            {...movie.fields}
                        />
                    </ListGroupItem>
                );
            } else {
                return null;
            }
        }.bind(this));

        return (
            <ListGroup>
                {moviesList}
            </ListGroup>
        );
    }
}

// const mapStateToProps = (state) => {
//     return {
//         searchText: state.filter.searchText,
//         sortBy: state.filter.sortBy,
//         movies: state.moviesList
//     }
// };

// const mapDispatchToProps = () => {
//     return {}
// };

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(MoviesList);
