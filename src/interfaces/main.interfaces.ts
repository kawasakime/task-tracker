import {IBouncyCheckboxProps} from 'react-native-bouncy-checkbox';
import {PressableProps, TextInputProps, TextStyle} from 'react-native';
import {Filter} from '../types/main.types';

export interface Task {
  id: string;
  title: string;
  description: string;
  date: string;
  completed: boolean;
}

export interface TaskItemProps {
  item: Task;
  index: number;
}

export interface HeaderProps {
  children: string;
  disableBackNavigation?: boolean;
}

export interface TasksListProps {
  items: Task[];
}

export interface EmptyContainerProps {
  children: string;
}

export interface ButtonProps extends PressableProps {
  children: string;
  textStyle?: TextStyle;
}

export interface InputProps extends TextInputProps {}

export interface TaskCompleteCheckboxProps extends IBouncyCheckboxProps {
  item: Task;
}

export interface FilterItem {
  value: Filter;
  title: string;
}

export interface FilterTasksProps {
  onSearch: (value: string) => void;
  onChangeFilter: (filter: Filter) => void;
  activeFilter: Filter;
}

export interface FilterButtonProps extends ButtonProps {
  isActive: boolean;
}
