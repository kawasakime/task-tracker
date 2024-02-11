import styled from 'styled-components/native';
import {colors} from '../../constants/variables';

export const HeaderContainer = styled.View`
  justify-content: center;
  align-items: center;
  padding: 15px 0;
  position: relative;
  margin-bottom: 15px;
`;

export const HeaderTitle = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: ${colors.black};
`;

export const GoBackBtnContainer = styled.Pressable`
  position: absolute;
  padding: 15px;
  left: -20px;
  top: 0;
`;
