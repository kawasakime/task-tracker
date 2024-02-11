import {TextInputProps} from 'react-native';

export interface Task {
  title: string;
  description: string;
  date: string;
  time: string;
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

export interface ButtonProps {
  children: string;
  onPress: () => void;
}

export interface InputProps extends TextInputProps {}
