import { combineReducers } from 'redux';
import potlucksReducer from './potlucksReducer';
import sessionsReducer from './sessionsReducer';
import usersReducer from './usersReducer'

export default combineReducers({
  users: usersReducer,
  potlucks: potlucksReducer,
  sessions: sessionsReducer,
});
