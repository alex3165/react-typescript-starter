const API_URL = 'https://c07-referencedataaggregatorapi-v1.service.ttlnonprod.local';

const req = <T>(url: string, method = 'GET', body?: T) => new Request(url, {
  method,
  headers: new Headers({
    'Accept': 'application/vnd.trainline.travelprotocol.v3+json',
    'Content-Type': 'application/json',
    'Accept-Charset': 'utf-8'
  }),
  body
});

export const SET_SCOPES = 'SET_SCOPES';
export const SET_LOCATIONS = 'SET_LOCATIONS';

const setScopes = (payload: any) => (dispatch: any) => ({
  type: SET_SCOPES,
  payload
});

const setLocations = (payload: any) => (dispatch: any) => ({
  type: SET_LOCATIONS,
  payload
});

export const getScopes = () => (dispatch: any) => {
  return fetch(req(`${API_URL}/Scopes`))
    .then((res) => res.json())
    .then((scopes) => dispatch(setScopes(scopes)));
};

export const getLocations = (scopes: any) => (dispatch: any) => {
  return fetch(`${API_URL}/Locations`)
    .then((res) => res.json())
    .then((locations) => dispatch(setLocations(locations)));
};
