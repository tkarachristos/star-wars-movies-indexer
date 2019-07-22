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
               
        const movies = this.props.movies;

        // Apply sorting
        movies.sort((a, b) => {
            switch (this.props.sortBy) {
                case "Year": {
                    const yearA = a.fields.release_date.substring(0, 4);
                    const yearB = b.fields.release_date.substring(0, 4);

                    if(yearA < yearB) {
                        return -1;
                    }
                    else if(yearA > yearB) {
                        return 1;
                    }
                    return 0;
                }
                case "Episode": {
                    if(a.fields.episode_id < b.fields.episode_id) {
                        return -1;
                    }
                    else if(a.fields.episode_id > b.fields.episode_id) {
                        return 1;
                    }
                    
                    return 0;
                }
                default:
                    return 0;
            }
        })

        // Apply search text filter
        const moviesList = movies.map(function(movie, index) {
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
