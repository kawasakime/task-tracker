import React from 'react';
import {StyledInput} from '.';
import {colors} from '../../constants/variables';
import {InputProps} from '../../interfaces/main.interfaces';

const Input = (props: InputProps) => {
  return <StyledInput {...props} cursorColor={colors.black} />;
};

export default Input;
