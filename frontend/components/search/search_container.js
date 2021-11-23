import { connect } from "react-redux";
import Search from "./search";
import { withRouter } from "react-router-dom";
import { changeFilter } from "../../actions/filter_actions";



// const mSTP = ({entities, filters }) => ({
//     businesses: Object.values(entities.businesses),
//     search: filters.search
// })

// const mSTP = (state, ownProps) => {
//     let businesses = Object.values(state.entities.businesses);
//     return (
//         {
//             businesses,
//             value: state.ui.filters.value,
//             near: state.ui.filters.near,
//             formType: "other_pages"
//         }
//     )

// };
const mSTP = (state) => {
    return (
        {
            value: state.ui.filters.value,
            near: state.ui.filters.near,
            businesses: Object.values(state.entities.businesses)

        }
    )
}

const mDTP = (dispatch) => ({
    changeFilter: (value, near) => dispatch(changeFilter(value, near))
})


export default withRouter(connect(mSTP, mDTP)(Search));
