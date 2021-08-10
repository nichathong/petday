import { combineReducers } from 'redux';

// import benches from './benches_reducer';
// import reviews from './reviews_reducer';
import users from './users_reducer';
import businesses from './businesses_reducers';

export default combineReducers({
  businesses,
  // reviews,
  users
});
