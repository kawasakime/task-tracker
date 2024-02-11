import styled from 'styled-components/native';
import {colors, radius} from '../../constants/variables';
import {StyledText} from '../UI';
import {Task} from '../../interfaces/main.interfaces';
import {deadlineIsMissed} from '../../helpers/dateFormatters';

export const StyledTaskItem = styled.Pressable<{item: Task}>`
  background-color: ${({item}) => {
    if (item.completed) {
      return colors.success + 20;
    }

    if (deadlineIsMissed(item.date)) {
      return colors.danger + 20;
    }

    return colors.cardBackground;
  }};
  border-radius: ${radius.small};
  border: 2px solid
    ${({item}) => {
      if (item.completed) {
        return colors.success;
      }

      if (deadlineIsMissed(item.date)) {
        return colors.danger;
      }

      return colors.black + 20;
    }};
  overflow: hidden;
  padding: 15px;
  padding-top: 10px;
  padding-right: 50px;
`;

export const TaskDeadline = styled.Text`
  font-size: 12px;
  color: ${colors.black + 70};
  margin-bottom: 3px;
`;

export const TaskTitle = styled(StyledText)`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const TaskDescription = styled(StyledText)`
  font-size: 14px;
`;

export const CheckBoxContainer = styled.View`
  position: absolute;
  right: 10px;
  top: 32px;
`;
