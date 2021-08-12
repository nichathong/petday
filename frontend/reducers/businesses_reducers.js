import merge from 'lodash/merge';

import { RECEIVE_BUSINESSES } from '../actions/business_actions';
import { RECEIVE_BUSINESS } from '../actions/business_actions';
// import { RECEIVE_REVIEW } from '../actions/business_actions';

const BusinessReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = merge({}, oldState);
    // debugger
    switch(action.type) {
        case RECEIVE_BUSINESSES:
            return merge({}, action.businesses);
        case RECEIVE_BUSINESS:
            return merge({}, oldState, {[action.business.id]: action.business});
            // case RECEIVE_REVIEW:
            // const review = action.review;
            // newState[review.business_id].reviews.push(review);
            // return newState;
        default:
            return oldState;
    } 
};

export default BusinessReducer;