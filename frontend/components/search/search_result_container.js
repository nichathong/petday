import { connect } from 'react-redux';
import React from 'react';
import SearchResult from './search_result';


const mSTP = (state) => ({
    value: state.ui.filters.value,
    near: state.ui.filters.near,
    businesses: state.entities.businesses
});

export default connect(mSTP)(SearchResult);