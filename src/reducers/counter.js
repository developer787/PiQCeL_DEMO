import * as types from '../actions/action_types'
const initialState = { count: 0}
export default (state = initialState, action = {}) => {
	const newState = Object.assign({}, state)
	switch (action.type) {
		case types.INC:
			return Object.assign({}, state, { 
				count: state.count + 1 
			})
		case types.DEC:
			return Object.assign({}, state, { 
				count: state.count - 1 
			})
		default:
			return newState
	}
};
