export interface Task {
  title: string;
  description: string;
  createdAt: string;
  completed: boolean;
}

export interface TaskItemProps {
  item: Task;
  index: number;
}
