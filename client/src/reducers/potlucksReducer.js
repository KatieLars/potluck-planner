import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default (state = initialState.potlucks , action) => {
  switch(action.type) {
    case types.POTLUCKS_FOUND:
      return {...state, potlucks: action.potlucks}
    default:
      return state
    }
}
