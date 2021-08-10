import { connect } from  'react-redux';
import { fetchBusinesses } from '../../../actions/business_actions';
import { fetchBusiness } from '../../../actions/business_actions';
import { logout } from '../../../actions/session_actions';
// import { fetchBusiness, fetchReviews } from '../../../util/business_api_util';
import BusinessShow from './business_show';

const mSTP = ({entities}, {match}) => ({
    business: entities.businesses[match.params.businessId],
    formType: "other_pages",
    // currentUser: entities.users[state.session.id]
//   reviews: Object.values(entities.reviews)    
});

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
    logout: () => dispatch(logout())
});

export default connect(mSTP, mDTP)(BusinessShow);