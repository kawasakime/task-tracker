import {createSlice} from '@reduxjs/toolkit';
import {Task} from '../../interfaces/main.interfaces';
import {
  AddTaskPayload,
  EditTaskPayload,
  RemoveTaskPayload,
} from '../../interfaces/payloads.interfaces';

interface CounterState {
  items: Task[];
}

const initialState: CounterState = {
  items: [],
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, {payload}: AddTaskPayload) => {
      state.items.push(payload);
    },
    removeTask: (state, {payload}: RemoveTaskPayload) => {
      state.items = state.items.filter((_, index) => index !== payload);
    },
    editTask: (state, {payload}: EditTaskPayload) => {
      state.items = state.items.map((task, index) =>
        index === payload.index ? payload.item : task,
      );
    },
  },
});

export const {addTask, removeTask, editTask} = tasksSlice.actions;

export default tasksSlice.reducer;
