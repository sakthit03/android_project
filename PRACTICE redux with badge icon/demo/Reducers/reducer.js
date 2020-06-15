
import { createStore, combineReducers } from 'redux';

const user=[
  {name:'',age:'',mobile:''},
]

// A very simple reducer
function userReducer(state, action) {
  /*if (typeof state === 'undefined') {
    return user;
  }*/

  switch (action.type) {
    case 'NAME':

      return action.payload.user;

    case 'DELETE':
      return user;


    default:
      return user;
  }
}

function TestReducer(state, action) {
  /*if (typeof state === 'undefined') {
    return user;
  }*/

  switch (action.type) {
    case 'ADD_BADGE':

      return (
        state
        );

    default:
      return 'fill test and hid test';
  }
}

export let combinedReducers=combineReducers({user:userReducer,test:TestReducer});


