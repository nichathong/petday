import { connect } from 'react-redux';
import { fetchBusiness, fetchBusinesses } from '../../../actions/business_actions';
import AllPhotos from './all_photos';
import { changeFilter } from '../../../actions/filter_actions';


const mSTP = (state, ownProps) => {
    // debugger
    return ({
        id: state.session.id,
        business: state.entities.businesses.businesses[ownProps.match.params.businessId],
        value: state.ui.filters.value,
        near: state.ui.filters.near,

    })
}

const mDTP = dispatch => ({
    fetchBusiness: (businessId) => dispatch(fetchBusiness(businessId)),
    fetchBusinesses: () => dispatch(fetchBusinesses()),
    changeFilter: (filter, value) => dispatch(changeFilter(filter, value))
    
});


export default connect(mSTP, mDTP)(AllPhotos);