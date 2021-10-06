import { connect } from "react-redux";
import Search from "./search";
import { withRouter } from "react-router-dom";
import { changeFilter } from "../../actions/filter_actions";


// const mSTP = ({entities, filters }) => ({
//     businesses: Object.values(entities.businesses),
//     search: filters.search
// })
const mSTP = (state) => ({
    value: state.ui.filters.value,
    near: state.ui.filters.near
})

const mDTP = (dispatch) => ({
    changeFilter: (value, near) => dispatch(changeFilter(value, near))
})

// const mDTP = (dispatch) => ({
//     updateFilter: (filter,value) => dispatch(updateFilter(filter, value))
// })

export default withRouter(connect(mSTP, mDTP)(Search));
