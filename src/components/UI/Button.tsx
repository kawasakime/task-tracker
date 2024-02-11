import React from 'react';
import {StyleSheet} from 'react-native';
import {colors} from '../../constants/variables';
import {StyledButton, StyledText} from '.';
import {ButtonProps} from '../../interfaces/main.interfaces';

const Button = ({
  children,
  onPress,
  disabled,
  textStyle,
  ...rest
}: ButtonProps) => {
  return (
    <StyledButton
      style={disabled && styles.disabled}
      onPress={onPress}
      {...rest}>
      <StyledText style={[styles.text, textStyle]}>{children}</StyledText>
    </StyledButton>
  );
};

const styles = StyleSheet.create({
  text: {
    color: colors.white,
    fontWeight: 'bold',
  },
  disabled: {
    opacity: 0.7,
  },
});

export default Button;
