import styled from 'styled-components/native';
import {colors, radius} from '../../constants/variables';

export const StyledTaskItem = styled.Pressable`
  height: 50px;
  background-color: ${colors.white};
  border-radius: ${radius.small};
`;
