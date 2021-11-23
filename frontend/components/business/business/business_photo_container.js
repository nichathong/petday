import { connect } from 'react-redux';
import { fetchBusiness, fetchBusinesses } from '../../../actions/business_actions';
import BusinessPhoto from './business_photo';
import { updateBusiness } from '../../../actions/business_actions';
import { changeFilter } from '../../../actions/filter_actions';

const mSTP = (state, ownProps) => {
    let business = state.entities.businesses.businesses ? state.entities.businesses.businesses[ownProps.match.params.businessId] : "";
    // debugger
    return ({
        user: state.session.id,
        business
    })
}

const mDTP = (dispatch, ownProps) => ({
    fetchBusiness: () => dispatch(fetchBusiness(ownProps.match.params.id)),
    fetchBusinesses: (businesses) => dispatch(fetchBusinesses(businesses)),
    updateBusiness: (business) => dispatch(updateBusiness(business)),
    changeFilter: (filter, value) => dispatch(changeFilter(filter, value))
})

export default connect(mSTP, mDTP)(BusinessPhoto)