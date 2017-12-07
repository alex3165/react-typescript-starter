// tslint:disable-next-line:no-var-requires
const locations = require('../locations.json');

// const API_URL = 'https://c07-referencedataaggregatorapi-v1.service.ttlnonprod.local';

// const req = <T>(url: string, method = 'GET', body?: T) => new Request(url, {
//   method,
//   headers: new Headers({
//     'Accept': 'application/vnd.trainline.travelprotocol.v3+json',
//     'Content-Type': 'application/json',
//     'Accept-Charset': 'utf-8',
//     'conversationId': '123',
//     'contexturi': '12',
//     'Access-Control-Allow-Origin': '*'
//   }),
//   body
// });

export const SET_LOCATIONS = 'SET_LOCATIONS';

const setLocations = (payload: any) => ({
  type: SET_LOCATIONS,
  payload
});

export const getLocations = () => (dispatch: any) => {
  return Promise.resolve(dispatch(setLocations(locations)));
  // return fetch(req(`${API_URL}/Scopes`))
  //   .then((res) => res.json())
  //   .then((scopes) => {
  //     // TODO: serialize scopes and pass it down to location request
  //     return fetch(`${API_URL}/Locations`).then((res) => res.json());
  //   })
  //   .then((locations) => dispatch(setLocations(locations)));
};
