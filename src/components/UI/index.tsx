import styled from 'styled-components/native';
import {colors, radius} from '../../constants/variables';

export const AppContainer = styled.SafeAreaView`
  flex: 1;
`;

export const Container = styled.View`
  flex: 1;
  background: ${colors.white};
  padding: 0 15px;
`;

export const StyledButton = styled.Pressable`
  width: 100%;
  height: 50px;
  background-color: ${colors.primary};
  justify-content: center;
  align-items: center;
  border-radius: ${radius.small};
  overflow: hidden;
`;

export const StyledText = styled.Text`
  color: ${colors.black};
  font-size: 16px;
`;

export const StyledInput = styled.TextInput`
  border-radius: ${radius.small};
  overflow: hidden;
  border: 1px solid ${colors.black}40;
  padding: 10px 15px;
`;

export const FormBlock = styled.View`
  margin-bottom: 10px;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const VerticalSeparator = styled.View`
  margin-bottom: 10px;
`;
