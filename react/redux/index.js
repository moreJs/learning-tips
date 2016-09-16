'use strict';

var redux = require('redux');
var createStore = redux.createStore;
var applyMiddleware = redux.applyMiddleware;

function logger() {
  return function(next) {
    return function(action) {
      console.log('in logger');
      let value = next(action);
      console.log('outer logger');
      return value;
    }
  }
}

function test() {
  return function(next) {
    return function(action) {
      console.log('in test');
      let value = next(action);
      console.log('out test');
      return value;
    }
  }
}

function todos(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      console.log('in body');
      return state.concat([action.text]);
    default:
      return state;
  }
}

let createStoreWithMiddleware = applyMiddleware(logger, test)(createStore)
let store = createStoreWithMiddleware(todos, ['init state']);

store.dispatch({
  type: 'ADD_TODO',
  text: 'hello'
});

console.log(store.getState());