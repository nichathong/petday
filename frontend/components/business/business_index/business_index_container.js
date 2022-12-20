import React from 'react';
import { connect } from 'react-redux';
import { fetchBusinesses } from '../../../actions/business_actions';
import BusinessIndex from './business_index'; 
import { logout } from '../../../actions/session_actions';

import { changeFilter } from '../../../actions/filter_actions';
import { fetchReviews } from '../../../actions/review_actions';

// container component ->  interact with redux store
const mSTP = (state, ownProps) => {
    // debugger
    let businesses = Object.values(state.entities.businesses); // state here is global state (from redux store)
    return (
        {
            //props : external data, from database
            businesses,
            value: state.ui.filters.value,
            near: state.ui.filters.near,
            formType: "other_pages"
        }
    )

};

const mDTP = dispatch => ({
    //fucntion props
    fetchBusinesses: () => dispatch(fetchBusinesses()),
    logout: () => dispatch(logout()),
    changeFilter: (filter, value) => dispatch(changeFilter(filter, value))
})

export default connect(mSTP, mDTP)(BusinessIndex); //connect function is passing props to businessindex component