import React from 'react';
import {StyledText} from '../UI';
import {EmptyContainerProps} from '../../interfaces/main.interfaces';
import {StyledEmptyContainer} from './styled';

const EmptyContainer = ({children}: EmptyContainerProps) => {
  return (
    <StyledEmptyContainer>
      <StyledText>{children}</StyledText>
    </StyledEmptyContainer>
  );
};

export default EmptyContainer;
