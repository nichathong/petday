import { connect } from 'react-redux';
import ReviewForm from './review_form'
import { createReview } from '../../actions/review_actions'
import { fetchBusiness } from '../../actions/business_actions'
import { logout } from '../../actions/session_actions';

const mSTP = (state, ownProps) => {
    return {
        business: state.entities.businesses[ownProps.match.params.businessId],
        user_id: state.session.id,
        formType: "review_pages",
        currentUser: state.entities.users[state.session.id],
        errors: state.errors.review
    }
}

// const mSTP = ({entities}, {match}, {session}, {errors}) => ({
//     business: entities.businesses[match.params.businessId],
//     formType: "review_pages",
//     user_id: session.id,
//     currentUser: entities.users[state.session.id],
//     errors: errors.review
// })
    

const mDTP = dispatch =>(
    {
        fetchBusiness: (businessId) => dispatch(fetchBusiness(businessId)),
        createReview: (review, businessId) => dispatch(createReview(review, businessId)),
        logout: () => dispatch(logout())
    }
)

export default connect(mSTP, mDTP)(ReviewForm)