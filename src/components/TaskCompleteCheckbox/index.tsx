import React, {useCallback} from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {useAppDispatch} from '../../redux/hooks';
import {TaskCompleteCheckboxProps} from '../../interfaces/main.interfaces';
import {colors} from '../../constants/variables';
import {StyleSheet} from 'react-native';
import {editTask} from '../../redux/slices/tasksSlice';

const TaskCompleteCheckbox = ({item, ...rest}: TaskCompleteCheckboxProps) => {
  const dispatch = useAppDispatch();

  const checkboxPressHandler = (isChecked: boolean) => {
    dispatch(editTask({...item, completed: isChecked}));
  };

  const CheckBox = useCallback(
    () => (
      <BouncyCheckbox
        size={30}
        fillColor={colors.primary}
        unfillColor={colors.white}
        text={''}
        iconStyle={{borderColor: colors.black}}
        textContainerStyle={styles.textContainer}
        innerIconStyle={styles.icon}
        textStyle={styles.text}
        isChecked={item.completed}
        onPress={checkboxPressHandler}
        {...rest}
      />
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [item],
  );

  return <CheckBox />;
};

const styles = StyleSheet.create({
  textContainer: {
    marginLeft: 0,
  },
  text: {
    fontWeight: 'bold',
    color: colors.black,
  },
  icon: {
    borderWidth: 2,
  },
});

export default TaskCompleteCheckbox;
