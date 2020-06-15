import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reduser from './redusers';

const LogMiddleware = (store) => (dispatch) => (action) => {
  console.log(action.type, store.getState());
  return dispatch(action);
}
const stringMiddleware = () => (dispatch) => (action) => {
  if (typeof action === 'string') {
    return dispatch({
      type: action,
    });
  }
  return dispatch(action);
}

const store = createStore(reduser, applyMiddleware(thunkMiddleware, stringMiddleware, LogMiddleware));

const timeoutActionCreator = (timeout) => (dispatch) => {
  setTimeout(() => dispatch({
      type: 'TIMEOUT_ACTION'
    }), timeout)
  }


store.dispatch(timeoutActionCreator(3000));

export default store;