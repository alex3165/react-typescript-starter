import { combineReducers, Action } from 'redux';

const reducers = combineReducers<any>({
  entities: (state: any = {}, action: Action) => state
});

export default reducers;
