import {FilterItem} from '../interfaces/main.interfaces';

export const filters: FilterItem[] = [
  {value: 'all', title: 'Все'},
  {
    value: 'completed',
    title: 'Выполненные',
  },
  {
    value: 'missed',
    title: 'Просроченные',
  },
];
