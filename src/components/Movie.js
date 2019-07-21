import React from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

export default function Movie (props) {
    return (
        <Row justify="start">
            <Col xs={2} sm={2} md={2} lg={2}>
                EPISODE {props.episode_id}
            </Col>
            <Col xs={5} sm={5} md={5} lg={5}>
                {props.title}
            </Col>
            <Col xs={1} sm={1} md={1} lg={1}>
                {props.release_date}
            </Col>
        </Row>
    );
}
