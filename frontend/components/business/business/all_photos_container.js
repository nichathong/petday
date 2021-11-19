import { connect } from 'react-redux';
import { fetchBusiness, fetchBusinesses } from '../../../actions/business_actions';
import AllPhotos from './all_photos';


const mSTP = (state, ownProps) => {
    debugger
    return ({
        id: state.session.id,
        business: state.entities.businesses.businesses[ownProps.match.params.businessId]

    })
}

const mDTP = dispatch => ({
    fetchBusiness: (businessId) => dispatch(fetchBusiness(businessId)),
    fetchBusinesses: () => dispatch(fetchBusinesses())
});


export default connect(mSTP, mDTP)(AllPhotos);