// tslint:disable-next-line:no-var-requires
const { stringify } = require('qs');
import * as moment from 'moment';
export const baseUrl = 'https://www.thetrainline.com/book/results';

export const queryBuilder = (origin: string, destination: string) => ({
  origin,
  destination,
  outwardDate: moment()
    .add(1, 'day')
    .format(),
  outwardDateType: 'departAfter',
  journeySearchType: 'single',
  passengers: ['1987-12-06']
});

export const getDeepLink = (origin: string, destination: string) => {
  const qs = stringify(queryBuilder(origin, destination));
  return `${baseUrl}?${qs}`;
};
