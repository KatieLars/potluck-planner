import { combineReducers } from 'redux';
import potlucksReducer from './potlucksReducer';
import sessionsReducer from './sessionsReducer';
import usersReducer from './usersReducer'
import friendsReducer from './friendsReducer'

export default combineReducers({
  friends,
  users,
  potlucks,
  sessions
});
