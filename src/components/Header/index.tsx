import React from 'react';
import {HeaderProps} from '../../interfaces/main.interfaces';
import {GoBackBtnContainer, HeaderContainer, HeaderTitle} from './styled';

import BackIcon from '../../assets/svg/caret-back.svg';
import {colors} from '../../constants/variables';
import {useNavigation} from '@react-navigation/native';

const Header = ({children, disableBackNavigation = false}: HeaderProps) => {
  const navigation = useNavigation();

  const goBackPressHandler = () => {
    navigation.goBack();
  };

  return (
    <HeaderContainer>
      {!disableBackNavigation && (
        <GoBackBtnContainer onPress={goBackPressHandler}>
          <BackIcon
            height={30}
            width={30}
            fill={colors.black}
            color={colors.black}
          />
        </GoBackBtnContainer>
      )}
      <HeaderTitle>{children}</HeaderTitle>
    </HeaderContainer>
  );
};

export default Header;
