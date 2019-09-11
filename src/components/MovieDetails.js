import React from 'react';
import PropTypes from 'prop-types';

export default function MovieDetails (props) {
    return (
        <div>
            <h2>{props.title}</h2>
            <p>{props.opening_crawl}</p>
            <p>Directed by: {props.director}</p>
        </div>
    );
}

MovieDetails.propTypes = {
    title: PropTypes.string,
    opening_crawl: PropTypes.string,
    director: PropTypes.string
}