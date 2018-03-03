import { combineReducers } from 'redux';
import potlucksReducers from './potlucksReducer';
import sessionsReducer from './sessionsReducer'

export default combineReducers({
  potlucks: potlucksReducers
});
