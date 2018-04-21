import { combineReducers } from 'redux';
import schools from './schoolReducer';

const rootReducer = combineReducers({
  schools,
});

export default rootReducer;

