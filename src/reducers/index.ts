import { combineReducers } from 'redux-immutable';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  routing: routerReducer
});
