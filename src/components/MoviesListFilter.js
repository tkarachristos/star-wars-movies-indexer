import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import MenuItem from 'react-bootstrap/lib/MenuItem';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import { textFilterChange, sortByChange  } from "../redux/actions/moviesFilter";

class MoviesListFilter extends React.Component {
    render(){
        const searchByText = (
            <Col xs={11} sm={11} md={11} lg={11}>
                <div className="input-group-lg">
                    <input
                        type="search"
                        className="form-control search-element"
                        onChange={this.props.onTextFilterChange}
                        placeholder="Type to search..."
                    />
                </div>
            </Col>
        );

        let sortBy = (
            <Col xs={1} sm={1} md={1} lg={1}>
                <DropdownButton
                    title="Sort by..."
                    className="search-element"
                    id="SortingSelection"
                    onSelect={this.props.onSortByChange}
                >
                    <MenuItem key={1} eventKey="Year">Year</MenuItem>
                    <MenuItem key={2} eventKey="Episode">Episode</MenuItem>
                </DropdownButton>
            </Col>
        );

        return (
            <Grid fluid={true}>
                <Row justify="start">
                    {sortBy}
                    {searchByText}
                </Row>
            </Grid>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTextFilterChange: (e) => {
            const action = textFilterChange(
                e.target.value
            );

            dispatch(action)
        },

        onSortByChange: (eventKey) => {
            const action = sortByChange(
                eventKey
            );

            dispatch(action)
        },
    }
};

MoviesListFilter.propTypes = {
    onTextFilterChange: PropTypes.func,
    onSortByChange: PropTypes.func
}

export default connect(
    null,
    mapDispatchToProps
)(MoviesListFilter);
