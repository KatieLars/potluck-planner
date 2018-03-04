import { combineReducers } from 'redux';
import potlucksReducer from './potlucksReducer';
import sessionsReducer from './sessionsReducer';

export default combineReducers({
  potlucks: potluckReducer,
  sessions: sessionsReducer,
});
