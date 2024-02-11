import moment from 'moment';

export const formatDateToNormal = (date: string) => {
  return moment(new Date(date))
    .format('DD-MM-YYYY')
    .replace('Invalid date', '');
};

export const formatDateToTime = (date: string) => {
  return moment(new Date(date)).format('HH:mm').replace('Invalid date', '');
};
