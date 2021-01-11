import {combineReducers} from 'redux';

//reducers go here
import commits from './commits';

const rootReducer = combineReducers({
  commits,
});

export default rootReducer;
