import {combineReducers} from 'redux';
import backlogReducer from './backlogReducer';

const rootReducer = combineReducers({
  backlogReducer
});

export default rootReducer;
