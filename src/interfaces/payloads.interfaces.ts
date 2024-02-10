import {Task} from './main.interfaces';

export interface AddTaskPayload {
  payload: Task;
}

export interface RemoveTaskPayload {
  payload: number;
}

export interface EditTaskPayload {
  payload: {
    index: number;
    item: Task;
  };
}
