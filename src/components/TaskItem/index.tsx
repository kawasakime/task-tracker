import React from 'react';
import {TaskItemProps} from '../../interfaces/main.interfaces';
import {StyledText} from '../UI';
import {StyledTaskItem} from './styled';

const TaskItem = ({item, index}: TaskItemProps) => {
  return (
    <StyledTaskItem>
      <StyledText>{item.title}</StyledText>
      <StyledText>{item.description}</StyledText>
    </StyledTaskItem>
  );
};

export default TaskItem;
