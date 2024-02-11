import {Task} from './main.interfaces';

export interface AddTaskPayload {
  payload: Task;
}

export interface RemoveTaskPayload {
  payload: string;
}

export interface EditTaskPayload {
  payload: Task;
}
