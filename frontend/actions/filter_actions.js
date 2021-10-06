import { receiveBusinesses, fetchBusinesses } from './business_actions';
import * as APIUtil from '../util/business_api_util';

export const UPDATE_FILTER = 'UPDATE_FILTER';

export const updateFilter = (value, near) => ({
  type: UPDATE_FILTER,
  value,
  near
});

export const changeFilter = (value, near) => (dispatch, getState) => {
  dispatch(updateFilter(value, near));
  return fetchBusinesses(getState().ui.filters)(dispatch);
};

// export const omnisearch = query => dispatch => (
//   APIUtil.search(query).then( businesses =>
//   (dispatch(receiveBusinesses(businesses)))
//   )
// );