import { combineReducers } from 'redux';
import { SET_LOCATIONS } from '../actions/index';

export interface StateRoot {
  locations: any;
}

// const normalize = (payload: any) => {
//   return payload.data.reduce((dict: any, next: any) => {
//     dict[next.id] = next;
//     return dict;
//   }, {});
// };

const locationsReducer = (state = {}, action: any) => {
  const { payload, type } = action;
  // const normalizedLocations = normalize(payload);
  switch (type) {
    case SET_LOCATIONS:
      return {
        ...payload,
        ...state
      };
    default:
      return state;
  }
};

const reducers = combineReducers({
  locations: locationsReducer
});

export default reducers;
