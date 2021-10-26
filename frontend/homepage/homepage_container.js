import {connect} from 'react-redux';
import { changeFilter } from '../actions/filter_actions';
import Homepage from './homepage';
import { fetchBusinesses } from '../actions/business_actions';

const mDTP = (dispatch) => ({
    fetchBusinesses: () => dispatch(fetchBusinesses()),
    changeFilter: (filter, value) => dispatch(changeFilter(filter,value))
});

export default connect(null, mDTP)(Homepage);