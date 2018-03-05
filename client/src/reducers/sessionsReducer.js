import * as types from '../actions/actionTypes';
import initialState from './initialState';


export default function sessionsReducer(state = initialState.session, action) {
  switch(action.type) {
    case types.SIGN_IN_SUCCESS:
      return !!sessionStorage.jwt
    case types.LOG_OUT:
      return !!sessionStorage.jwt
    default:
      return state;
  }
}
