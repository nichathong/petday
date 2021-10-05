import React from 'react';
import { connect } from 'react-redux';
import { fetchBusinesses } from '../../../actions/business_actions';
import BusinessIndex from './business_index'; 
import { logout } from '../../../actions/session_actions';

import { changeFilter } from '../../../actions/filter_actions';

const mSTP = (state, ownProps) => {
    let businesses = Object.values(state.entities.businesses);
    return (
        {
            businesses,
            near: state.filters.near,
            find: state.filters.find,
            formType: "other_pages"
        }
    )

};

const mDTP = dispatch => ({
    fetchBusinesses: () => dispatch(fetchBusinesses()),
    logout: () => dispatch(logout()),
    changeFilter: (filter, value) => dispatch(changeFilter(filter, value))
})

export default connect(mSTP, mDTP)(BusinessIndex);