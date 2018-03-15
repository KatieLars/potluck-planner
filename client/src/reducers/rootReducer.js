import { combineReducers } from 'redux';
import potlucksReducer from './potlucksReducer';
import sessionsReducer from './sessionsReducer';
import usersReducer from './usersReducer'
import friendsReducer from './friendsReducer'
import recipesReducer from './recipesReducer'

export default combineReducers({
  recipes: recipesReducer,
  friends: friendsReducer,
  users: usersReducer,
  potlucks: potlucksReducer,
  sessions: sessionsReducer
});
