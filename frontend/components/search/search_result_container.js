import { connect } from 'react-redux';
import React from 'react';
import SearchResult from './search_result';
import { withRouter } from 'react-router';
import { changeFilter } from '../../actions/filter_actions';
import { fetchBusinesses } from '../../actions/business_actions';

const mSTP = (state) => ({
    value: state.ui.filters.value,
    near: state.ui.filters.near,
    businesses: Object.values(state.entities.businesses),
    
});

const mDTP = (dispatch) => ({
    changeFilter: (value, near) => dispatch(changeFilter(value, near)),
    fetchBusinesses: () => dispatch(fetchBusinesses())
})

export default withRouter(connect(mSTP,mDTP)(SearchResult));