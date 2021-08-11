import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import Dropdown from "./dropdown";

const mSTP = ({ session }) => ({
    user: session.id
});

const mDTP = dispatch => ({
    logout: ()  => dispatch(logout())
});

export default connect(mSTP, mDTP)(Dropdown);

