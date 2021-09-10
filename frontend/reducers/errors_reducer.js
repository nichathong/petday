import { combineReducers } from "redux";
import session from './session_errors_reducer';
import reviewErrorsReducer from "./review_errors_reducer";

const errorsReducer = combineReducers({
    session,
    reviewErrorsReducer
});

export default errorsReducer;


//anything in the models