import * as types from '../actions/action_types';
const initialState = { 
	x: 100,
  y: 60
}
export default (state = initialState, action = {}) => {
	const newState = Object.assign({}, state)
	switch (action.type) {
		case types.LEFT:
			return Object.assign({}, state, { 
				x: state.x - 1 
			})
		default:
			return newState
	}
}

