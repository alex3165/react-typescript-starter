import { combineReducers } from 'redux';
import { SET_SCOPES } from '../actions/index';

export interface StateRoot {

}

const scopesReducer = (state = {}, action: any) => {
  const { payload, type } = action;
  console.log(payload);
  switch (type) {
    case SET_SCOPES:
      return {
        ...state
      };
    default:
      return state;
  }
};

const reducers = combineReducers({
  scopes: scopesReducer
});

export default reducers;
