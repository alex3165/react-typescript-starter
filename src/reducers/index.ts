import { routerReducer as routing } from 'react-router-redux';
import { combineReducers, Action } from 'redux';

const reducers = combineReducers<any>({
  routing,
  entities: (state: any = {}, action: Action) => state
});

export default reducers;
