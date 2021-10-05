import { receiveBusinesses, fetchBusinesses } from './business_actions';
import * as APIUtil from '../util/business_api_util';

export const UPDATE_FILTER = 'UPDATE_FILTER';

export const updateFilter = (filter, value) => ({
  type: UPDATE_FILTER,
  filter,
  value
});

export const changeFilter = (filter, value) => (dispatch, getState) => {
  dispatch(updateFilter(filter, value));
  return fetchBusinesses(getState().filters)(dispatch);
};

// export const omnisearch = query => dispatch => (
//   APIUtil.search(query).then( businesses =>
//   (dispatch(receiveBusinesses(businesses)))
//   )
// );