import React from 'react';
import Header from '../components/Header';
import {Container, Row, StyledText} from '../components/UI';
import {NavigationScreens, TaskProps} from '../types/navigation.types';
import Button from '../components/UI/Button';
import {useNavigation} from '@react-navigation/native';
import {Alert, ScrollView, StyleSheet, View} from 'react-native';
import {colors} from '../constants/variables';
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import {removeTask, selectTask} from '../redux/slices/tasksSlice';
import {
  deadlineIsMissed,
  formatDateToNormal,
  formatDateToTime,
} from '../helpers/dateFormatters';
import {globalStyles} from '../styles/globalStyles';
import TaskCompleteCheckbox from '../components/TaskCompleteCheckbox';

const Task = ({route}: TaskProps) => {
  const {id} = route.params.item;
  const item = useAppSelector(state => selectTask(state.tasks, id));
  const navigation = useNavigation<NavigationScreens>();
  const dispatch = useAppDispatch();

  const editTaskPressHandler = () => {
    navigation.navigate('TaskForm', {item});
  };

  const removeTaskPressHandler = () => {
    Alert.alert('Удаление задачи', 'Вы точно хотите удалить задачу?', [
      {
        text: 'Да',
        onPress: () => {
          navigation.goBack();
          dispatch(removeTask(item.id));
        },
      },
      {
        text: 'Отмена',
      },
    ]);
  };

  return (
    <Container>
      <Header>Информация</Header>
      <ScrollView contentContainerStyle={globalStyles.scrollViewJustifyBetween}>
        <View>
          <Row>
            <TaskCompleteCheckbox
              textContainerStyle={styles.checkboxText}
              text={item.completed ? 'Выполнена' : 'В процессе'}
              textStyle={item.completed && styles.completed}
              item={item}
            />
            <StyledText style={deadlineIsMissed(item.date) && styles.missed}>
              {formatDateToNormal(item.date)} / {formatDateToTime(item.date)}
            </StyledText>
          </Row>
          <StyledText style={styles.title}>{item.title}</StyledText>
          <StyledText style={styles.description}>{item.description}</StyledText>
        </View>
        <View>
          <Button onPress={editTaskPressHandler}>Редактировать задачу</Button>
          <Button style={styles.deleteBtn} onPress={removeTaskPressHandler}>
            Удалить задачу
          </Button>
        </View>
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  deleteBtn: {
    backgroundColor: colors.danger,
    marginTop: 10,
  },
  checkboxText: {
    marginLeft: 10,
  },
  completed: {
    color: colors.success,
    fontWeight: 'bold',
  },
  missed: {
    fontWeight: 'bold',
    color: colors.danger,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 25,
    marginBottom: 40,
  },
  description: {
    color: colors.black + 80,
  },
});

export default Task;
