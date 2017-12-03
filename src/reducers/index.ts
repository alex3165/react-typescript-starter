import { combineReducers, Action } from 'redux';

export interface StateRoot {}

const reducers = combineReducers({
  entities: (state: StateRoot = {}, action: Action) => state
});

export default reducers;
