import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {Task} from '../interfaces/main.interfaces';

export type RootStackParamList = {
  Home: undefined;
  Task: {id: string};
  TaskForm: {item: Task} | undefined;
};

export type TaskFormProps = NativeStackScreenProps<
  RootStackParamList,
  'TaskForm'
>;

export type NavigationScreens = NativeStackNavigationProp<RootStackParamList>;
