import React from 'react';
import PropTypes from 'prop-types';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';

export default function MovieItem (props) {
    return (
        <ListGroupItem className="movie-row" onClick={props.onClick}>
            <Row justify="start">
                <Col xs={2} sm={2} md={2} lg={2}>
                    EPISODE {props.episode_id}
                </Col>
                <Col xs={8} sm={8} md={8} lg={8}>
                    {props.title}
                </Col>
                <Col xs={2} sm={2} md={2} lg={2}>
                    {props.release_date}
                </Col>
            </Row>
        </ListGroupItem>
    );
}

MovieItem.propTypes = {
    onClick: PropTypes.func,
    episode_id: PropTypes.number,
    title: PropTypes.string,
    release_date: PropTypes.string
}