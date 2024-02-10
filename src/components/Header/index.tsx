import React from 'react';
import {HeaderProps} from '../../interfaces/main.interfaces';
import {GoBackBtnContainer, HeaderContainer, HeaderTitle} from './styled';

import BackIcon from '../../assets/svg/caret-back.svg';

const Header = ({children, disableBackNavigation = false}: HeaderProps) => {
  return (
    <HeaderContainer>
      {!disableBackNavigation && (
        <GoBackBtnContainer>
          <BackIcon />
        </GoBackBtnContainer>
      )}
      <HeaderTitle>{children}</HeaderTitle>
    </HeaderContainer>
  );
};

export default Header;
