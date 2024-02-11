import React, {memo} from 'react';
import {TaskItemProps} from '../../interfaces/main.interfaces';
import {
  CheckBoxContainer,
  StyledTaskItem,
  TaskDeadline,
  TaskDescription,
  TaskTitle,
} from './styled';
import Animated, {FadeInLeft, FadeOutRight} from 'react-native-reanimated';

import TaskCompleteCheckbox from '../TaskCompleteCheckbox';
import {
  formatDateToNormal,
  formatDateToTime,
} from '../../helpers/dateFormatters';
import {useNavigation} from '@react-navigation/native';
import {NavigationScreens} from '../../types/navigation.types';

const TaskItem = memo(({item, index}: TaskItemProps) => {
  const navigation = useNavigation<NavigationScreens>();

  const openTaskPressHandler = () => {
    navigation.navigate('Task', {item});
  };

  return (
    <Animated.View
      entering={FadeInLeft.delay(index * 30)}
      exiting={FadeOutRight}>
      <StyledTaskItem onPress={openTaskPressHandler} item={item}>
        <TaskDeadline>
          {formatDateToNormal(item.date)} / {formatDateToTime(item.date)}
        </TaskDeadline>
        <TaskTitle numberOfLines={1}>{item.title}</TaskTitle>
        <TaskDescription numberOfLines={1}>{item.description}</TaskDescription>
        <CheckBoxContainer>
          <TaskCompleteCheckbox item={item} />
        </CheckBoxContainer>
      </StyledTaskItem>
    </Animated.View>
  );
});

export default TaskItem;
