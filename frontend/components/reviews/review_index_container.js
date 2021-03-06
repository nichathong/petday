import { connect } from 'react-redux';
import ReviewIndex from './review_index';
import {fetchReviews, updateReview, deleteReview } from '../../actions/review_actions'
import {fetchUsers} from '../../actions/user_actions'

const mSTP = (state, {businessId}) => {
    // debugger
    return(
        {
            reviews: Object.values(state.entities.reviews),
            users: state.entities.users,
            currentUser: state.entities.users[state.session.id],
            businessId: businessId
            // business_id: ownProps.match.params.businessId
        }
    )
    
}

const mDTP = dispatch => (
    {
        fetchUsers: () => dispatch(fetchUsers()),
        fetchReviews: (businessId) => dispatch(fetchReviews(businessId)),
        updateReview: (review, businessId) => dispatch(updateReview(review, businessId)),
        deleteReview: (review, businessId) => dispatch(deleteReview(review, businessId))
    }
)

export default connect(mSTP, mDTP)(ReviewIndex)