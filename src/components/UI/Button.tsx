import React from 'react';
import {StyleSheet} from 'react-native';
import {colors} from '../../constants/variables';
import {StyledButton, StyledText} from '.';
import {ButtonProps} from '../../interfaces/main.interfaces';

const Button = ({children, onPress, ...rest}: ButtonProps) => {
  return (
    <StyledButton onPress={onPress} {...rest}>
      <StyledText style={styles.text}>{children}</StyledText>
    </StyledButton>
  );
};

const styles = StyleSheet.create({
  text: {
    color: colors.white,
  },
});

export default Button;
