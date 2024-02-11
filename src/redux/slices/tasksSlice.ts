import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {Task} from '../../interfaces/main.interfaces';
import {
  AddTaskPayload,
  EditTaskPayload,
  RemoveTaskPayload,
} from '../../interfaces/payloads.interfaces';
import {TasksState} from '../../interfaces/slices.interfaces';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getTasksFromStorage = createAsyncThunk(
  'users/fetchByIdStatus',
  async () => {
    const tasks = await AsyncStorage.getItem('@tasks');
    return tasks ? (JSON.parse(tasks) as Task[]) : [];
  },
);

const saveTasksToStorage = (state: TasksState) => {
  AsyncStorage.setItem('@tasks', JSON.stringify(state.items));
};

const initialState: TasksState = {
  items: [],
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, {payload}: AddTaskPayload) => {
      state.items.push(payload);
      saveTasksToStorage(state);
    },
    removeTask: (state, {payload}: RemoveTaskPayload) => {
      state.items = state.items.filter(task => task.id !== payload);
      saveTasksToStorage(state);
    },
    editTask: (state, {payload}: EditTaskPayload) => {
      state.items = state.items.map(task =>
        task.id === payload.id ? payload : task,
      );
      saveTasksToStorage(state);
    },
  },
  extraReducers: builder => {
    builder.addCase(getTasksFromStorage.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});

export const selectTask = (state: TasksState, id: string) =>
  state.items.find(task => task.id === id) as Task;

export const {addTask, removeTask, editTask} = tasksSlice.actions;

export default tasksSlice.reducer;
