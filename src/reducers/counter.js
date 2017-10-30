//import * as types from '../actions/action-types';
const initialState = { count: 0}
export default (state = initialState, action = {}) => {
	const newState = Object.assign({}, state)
  switch (action.type) {
    // case types.ADD_PERSON:
    //   return [...state, Object.assign({}, action.person)];
    default:
      return newState
  }
};
