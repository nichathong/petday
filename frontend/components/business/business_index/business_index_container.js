import React from 'react';
import { connect } from 'react-redux';
import { fetchBusinesses } from '../../../actions/business_actions';
import BusinessIndex from './business_index'; 
import { logout } from '../../../actions/session_actions';
import { updateFilter } from '../../../actions/filter_actions';

const mSTP = (state, ownProps) => {
    return (
        {
            businesses: Object.values(state.entities.businesses),
            formType: "other_pages"
        }
    )

};

const mDTP = dispatch => ({
    fetchBusinesses: () => dispatch(fetchBusinesses()),
    logout: () => dispatch(logout()),
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
})

export default connect(mSTP, mDTP)(BusinessIndex);