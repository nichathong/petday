import { connect } from 'react-redux';
import { fetchBusiness, fetchBusinesses } from '../../../actions/business_actions';
import BusinessPhoto from './business_photo';
import { updateBusiness } from '../../../actions/business_actions';


const mSTP = (state, ownProps) => {
    // debugger
    return ({
        user: state.session.id,
        business: state.entities.businesses.businesses[ownProps.match.params.businessId]
    })
}

const mDTP = (dispatch, ownProps) => ({
    fetchBusiness: () => dispatch(fetchBusiness(ownProps.match.params.id)),
    fetchBusinesses: (businesses) => dispatch(fetchBusinesses(businesses)),
    updateBusiness: (business) => dispatch(updateBusiness(business))
})

export default connect(mSTP, mDTP)(BusinessPhoto)