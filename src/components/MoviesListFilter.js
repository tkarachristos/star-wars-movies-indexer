import React from 'react';
import { connect } from 'react-redux';

import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import MenuItem from 'react-bootstrap/lib/MenuItem';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

// import { textFilterChange, typeFilterChange  } from "../actions/filter";

class MoviesListFilter extends React.Component {
    render(){
        const searchByText = (
            <Col xs={11} sm={11} md={11} lg={11}>
                <div className="input-group-lg">
                    <input
                        type="search"
                        className="form-control search-element"
                        // onChange={this.props.onTextFilterChange}
                        placeholder="Type to search..."
                    />
                </div>
            </Col>
        );

        let searchByType = (
            <Col xs={1} sm={1} md={1} lg={1}>
                <DropdownButton
                    title="Sort by..."
                    className="search-element"
                    // onSelect={this.props.onTypeFilterChange}
                >
                    <MenuItem key={0} eventKey="Year">Year</MenuItem>
                    <MenuItem key={1} eventKey="Episode">Episode</MenuItem>
                </DropdownButton>
            </Col>
        );

        return (
            <Grid fluid={true}>
                <Row justify="start">
                    {searchByType}
                    {searchByText}
                </Row>
            </Grid>
        );
    }
}

const mapStateToProps = () => {
    return {
        // typeFilter: state.searchFilter.type
    }
};

const mapDispatchToProps = () => {
    return {
        // onTextFilterChange: (e) => {
        //     const action = textFilterChange(
        //         e.target.value,
        //     );

        //     dispatch(action)
        // },

        // onTypeFilterChange: (eventKey, e) => {
        //     const action = typeFilterChange(
        //         eventKey,
        //     );

        //     dispatch(action)
        // },
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MoviesListFilter);
