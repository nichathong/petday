import { connect } from  'react-redux';
import { fetchBusinesses } from '../../../actions/business_actions';
import { fetchBusiness } from '../../../actions/business_actions';
import { logout } from '../../../actions/session_actions';
// import { fetchBusiness, fetchReviews } from '../../../util/business_api_util';
import BusinessShow from './business_show';
import { fetchReviews } from '../../../actions/review_actions';
import { changeFilter } from '../../../actions/filter_actions';

// const mSTP = ({entities}, {match}) => ({
//     business: entities.businesses.business,
//     formType: "other_pages",
//     // currentUser: entities.users[state.session.id]
// //   reviews: Object.values(entities.reviews)    
// });

const mSTP = (state, ownProps) => {
    //  let businesses = Object.values(state.entities.business)
    // debugger
    let business = state.entities.businesses.businesses[ownProps.match.params.businessId];
    return (
        {
            business,
            value: state.ui.filters.value,
            near: state.ui.filters.near,
            formType: "other_pages"
        }
    )

};

// const mapStateToProps = (state, { match }) => {
//     const businessId = parseInt(match.params.businessId);
//     const business = fetchBusiness(state.entities, businessId);
//     // const reviews = fetchReviews(state.entities, business);
//     return {
//         businessId,
//         business,
//         // reviews
//     }
// }

const mDTP = dispatch => ({
    fetchBusiness: id => dispatch(fetchBusiness(id)),
    fetchBusinesses: () => dispatch(fetchBusinesses()),
    logout: () => dispatch(logout()),
    fetchReviews: (businessId) => dispatch(fetchReviews(businessId)),
    changeFilter: (filter, value) => dispatch(changeFilter(filter, value))
});

export default connect(mSTP, mDTP)(BusinessShow);