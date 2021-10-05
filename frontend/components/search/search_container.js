import { connect } from "react-redux";
import Search from "./search";
import { withRouter } from "react-router-dom";
import { changeFilter } from "../../actions/filter_actions";

// const mSTP = ({entities, filters }) => ({
//     businesses: Object.values(entities.businesses),
//     search: filters.search
// })
const mSTP = (state) => ({
    find: state.filters.find,
    near: state.filters.near
})

const mDTP = (dispatch) => ({
    changeFilter: (filter,value) => dispatch(changeFilter(filter, value))
})

// const mDTP = (dispatch) => ({
//     updateFilter: (filter,value) => dispatch(updateFilter(filter, value))
// })

export default connect(mSTP, mDTP)(Search);
