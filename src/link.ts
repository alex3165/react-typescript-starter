// tslint:disable-next-line:no-var-requires
const { stringify } = require('qs');
export const baseUrl = 'https://www.thetrainline.com/book/results';

export const queryBuilder = (
  origin: string,
  destination: string,
  date: string
) => ({
  origin,
  destination,
  outwardDate: date,
  outwardDateType: 'departAfter',
  journeySearchType: 'single',
  passengers: ['1987-12-06']
});

export const getDeepLink = (
  origin: string,
  destination: string,
  date: string
) => {
  const qs = stringify(queryBuilder(origin, destination, date));
  return `${baseUrl}?${qs}`;
};
