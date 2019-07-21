import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import fetchMoviesAction from '../redux/actions/fetchMovies';

import ListGroup from 'react-bootstrap/lib/ListGroup';

import MovieItem from './MovieItem';

class MoviesList extends React.Component {

    constructor(props) {
        super(props);

        this.shouldComponentRender = this.shouldComponentRender.bind(this);
    }

    componentWillMount() {
        if(this.props.pending === false) {
            this.props.fetchMovies();
        }
    }

    shouldComponentRender() {
        if(this.props.pending === true) return false;
        return true;
    }
        
    /**
     * Adopted from jquery.searcher plugin
     * @param text
     */
    escapeRegExp(text){
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

    handleOnClick(index){
        alert('You clicked the ' + (index+1) + ' ListGroupItem');
    }

    render(){
        if(!this.shouldComponentRender()) return <div>Fetching Movies</div>

        const regex = this.buildRegex(this.props.searchText);
               
        const moviesList = this.props.movies.map(function(movie, index) {
            console.log("movie: " + movie)
            // const moviesList = this.props.movies.map(function(movie) {

            let itemContainsText = !!movie.fields.title.match(regex);

            if (itemContainsText){
                return (
                    <MovieItem
                        onClick={() => {this.handleOnClick(index)}}
                        key={movie.id}
                        {...movie.fields}
                    />
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

const mapStateToProps = (state) => {
    return {
        searchText: state.filter.searchText,
        sortBy: state.filter.sortBy,
        movies: state.movies.list,
        pending: state.movies.pending
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({fetchMovies: fetchMoviesAction}, dispatch)
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MoviesList);
