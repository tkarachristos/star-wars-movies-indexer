import React from 'react';
import { connect } from 'react-redux';

import MoviesListFilter from "./MoviesListFilter";

class App extends React.Component {
    render () {
        return (
            <div>
                <div className="search-ribbon">
                    <MoviesListFilter/>
                </div>
                <div className="list_area">
                </div>
            </div>
        );
    }
}

const mapStateToProps = () => {
    return {
    }
};

const mapDispatchToProps = () => {
    return {}
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
