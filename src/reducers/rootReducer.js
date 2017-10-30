import circle from './circle_reducer.js';
import counter from './counter.js';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  circle,
	counter
});

export default rootReducer;
