import { createStore, applyMiddleware } from 'redux';
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

const store = createStore(reduser, applyMiddleware(stringMiddleware, LogMiddleware));

store.dispatch('STRING_TO_ACTION_MIDDLEWARE');
store.dispatch('LOG_MIDDLEWARE');

export default store;