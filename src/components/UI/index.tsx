import styled from 'styled-components/native';
import {colors} from '../../constants/variables';

export const AppContainer = styled.SafeAreaView`
  flex: 1;
`;

export const Container = styled.View`
  flex: 1;
  background: ${colors.white};
  padding: 0 15px;
`;

export const Header = styled.View`
  justify-content: center;
  align-items: center;
  font-size: 20px;
  padding: 10px 0;
`;

export const HeaderTitle = styled.Text`
  font-weight: bold;
  font-size: 20;
  color: ${colors.black};
`;

export const Button = styled.Pressable``;

export const StyledText = styled.Text`
  color: ${colors.black};
  font-size: 16px;
`;
