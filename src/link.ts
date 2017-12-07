// tslint:disable-next-line:no-var-requires
const { stringify } = require('qs');
export const baseUrl = 'https://www.thetrainline.com/book/results';

export const queryBuilder = (origin: string, destination: string) => ({
  origin,
  destination,
  outwardDate: '2017-12-10T10:00:00',
  outwardDateType: 'departAfter',
  journeySearchType: 'single',
  passengers: ['1987-12-06']
});

export const getDeepLink = (origin: string, destination: string) => {
  const qs = stringify(queryBuilder(origin, destination));
  return `${baseUrl}?${qs}`;
};
