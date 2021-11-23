import { connect } from 'react-redux';
import ReviewForm from './review_form'
import { createReview } from '../../actions/review_actions'
import { fetchBusiness } from '../../actions/business_actions'
import { logout } from '../../actions/session_actions';
import { changeFilter } from '../../actions/filter_actions';

const mSTP = (state, ownProps) => {
    let business = state.entities.businesses.businesses ? state.entities.businesses.businesses[ownProps.match.params.businessId] : "" ;
    return {
        business,
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
        logout: () => dispatch(logout()),
        changeFilter: (filter, value) => dispatch(changeFilter(filter, value))
    }
)

export default connect(mSTP, mDTP)(ReviewForm)