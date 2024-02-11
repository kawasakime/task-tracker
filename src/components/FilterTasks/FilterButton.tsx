import React from 'react';
import {FilterButtonProps} from '../../interfaces/main.interfaces';
import Button from '../UI/Button';
import {StyleSheet} from 'react-native';
import {colors} from '../../constants/variables';

const FilterButton = ({children, onPress, isActive}: FilterButtonProps) => {
  return (
    <Button
      textStyle={!isActive ? styles.buttonText : {}}
      style={[styles.button, isActive && styles.isActive]}
      onPress={onPress}>
      {children}
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 'auto',
    height: 34,
    backgroundColor: colors.cardBackground,
    marginRight: 10,
    borderRadius: 17,
    paddingHorizontal: 15,
  },
  buttonText: {color: colors.black},
  isActive: {
    backgroundColor: colors.primary,
  },
});

export default FilterButton;
