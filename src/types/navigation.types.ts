import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {Task} from '../interfaces/main.interfaces';

export type RootStackParamList = {
  Home: undefined;
  Task: {item: Task};
  TaskForm: {item: Task} | undefined;
};

export type TaskFormProps = NativeStackScreenProps<
  RootStackParamList,
  'TaskForm'
>;

export type TaskProps = NativeStackScreenProps<RootStackParamList, 'Task'>;

export type NavigationScreens = NativeStackNavigationProp<RootStackParamList>;
