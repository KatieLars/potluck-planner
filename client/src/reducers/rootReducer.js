import { combineReducers } from 'redux';
import potlucksReducer from './potlucksReducer';

export default combineReducers({
  potlucks: potlucksReducers
});
