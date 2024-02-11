import {Task} from '../interfaces/main.interfaces';
import {Filter} from '../types/main.types';
import {deadlineIsMissed} from './dateFormatters';

export const changeFilter = (item: Task, filter: Filter) => {
  switch (filter) {
    case 'all':
      return item;
    case 'completed':
      return item.completed;
    case 'missed':
      return deadlineIsMissed(item.date) && !item.completed;
  }
};
