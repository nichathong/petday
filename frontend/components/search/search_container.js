import { connect } from "react-redux";
import Search from "./search";
import { withRouter } from "react-router-dom";
import { updateFilter } from "../../actions/filter_actions";

const mSTP = ({entities, filters }) => ({
    businesses: Object.values(entities.businesses),
    search: filters.search
})

const mDTP = (dispatch) => ({
    updateFilter: (filter,value) => dispatch(updateFilter(filter, value))
})

export default withRouter(connect(mSTP, mDTP)(Search));
