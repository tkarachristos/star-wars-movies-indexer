import React from 'react';

export default function MovieDetails (props) {
    return (
        <div>
            <h2>{props.title}</h2>
            <p>{props.opening_crawl}</p>
            <p>Directed by: {props.director}</p>
        </div>
    );
}
