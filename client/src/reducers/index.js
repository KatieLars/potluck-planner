import { combineReducers } from 'redux';
import potlucksReducers from './potlucksReducer';

export default combineReducers({
  potlucks: potlucksReducers
});
