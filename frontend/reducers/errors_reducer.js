import { combineReducers } from "redux";
import sessionErrorsReducer from "./session_errors_reducer";
import reviewErrorsReducer from "./review_errors_reducer";

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    reviewErrorsReducer
    //hjere is reducder
});

export default errorsReducer;


//anything in the models