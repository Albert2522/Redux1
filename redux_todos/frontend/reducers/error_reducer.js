import {RECEIVE_ERRORS, CLEAR_ERRORS} from '../actions/error_actions.js';

import merge from 'lodash/merge';

const errorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ERRORS:
      state.push(action.errors);
      return action.errors;
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
};


export default errorsReducer;
