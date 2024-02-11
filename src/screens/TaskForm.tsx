import React, {useCallback, useState} from 'react';
import {Keyboard, ScrollView, StyleSheet, View} from 'react-native';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import {v4 as uuidv4} from 'uuid';
import {useNavigation} from '@react-navigation/native';

import Header from '../components/Header';
import Input from '../components/UI/Input';
import Button from '../components/UI/Button';
import {Container, FormBlock, StyledText} from '../components/UI';

import {useAppDispatch} from '../redux/hooks';
import {addTask, editTask} from '../redux/slices/tasksSlice';

import {TaskFormProps} from '../types/navigation.types';
import {Task} from '../interfaces/main.interfaces';

import {changeObjectState} from '../helpers/changeObjectState';
import {formatDateToNormal, formatDateToTime} from '../helpers/dateFormatters';

import {globalStyles} from '../styles/globalStyles';

const TaskForm = ({route}: TaskFormProps) => {
  const taskData = route.params?.item;
  const [task, setTask] = useState<Task>(
    taskData ?? {
      id: uuidv4(),
      title: '',
      description: '',
      date: '',
      completed: false,
    },
  );

  const [dateModalIsOpen, setDateModalIsOpen] = useState(false);
  const [timeModalIsOpen, setTimeModalIsOpen] = useState(false);

  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  const changeValueHandler = useCallback(
    ({field, value}: {field: keyof Task; value: string | boolean}) => {
      setTask(prev => changeObjectState({state: prev, value, field}));
    },
    [],
  );

  const dateInputFocusHandler = useCallback(() => {
    setDateModalIsOpen(true);
    Keyboard.dismiss();
  }, []);

  const timeInputFocusHandler = useCallback(() => {
    setTimeModalIsOpen(true);
    Keyboard.dismiss();
  }, []);

  const confirmPressHandler = () => {
    dispatch(taskData ? editTask(task) : addTask(task));
    navigation.goBack();
  };

  const disableConfirmButton = () => {
    return [task.description, task.date, task.title].some(item => item === '');
  };

  return (
    <Container>
      <Header>{taskData ? 'Редактирование задачи' : 'Создание задачи'}</Header>
      <ScrollView
        contentContainerStyle={globalStyles.scrollViewJustifyBetween}
        showsVerticalScrollIndicator={false}>
        <View>
          <FormBlock>
            <StyledText style={styles.inputTitle}>Название</StyledText>

            <Input
              onChangeText={text =>
                changeValueHandler({field: 'title', value: text})
              }
              value={task.title}
              placeholder="Введите название задачи"
            />
          </FormBlock>
          <FormBlock>
            <StyledText style={styles.inputTitle}>Описание</StyledText>
            <Input
              style={styles.descriptionInput}
              textAlignVertical="top"
              onChangeText={text =>
                changeValueHandler({field: 'description', value: text})
              }
              multiline={true}
              value={task.description}
              placeholder="Введите описание задачи"
            />
          </FormBlock>
          <FormBlock>
            <StyledText style={styles.inputTitle}>Дата</StyledText>
            <Input
              showSoftInputOnFocus={false}
              onFocus={dateInputFocusHandler}
              value={formatDateToNormal(task.date)}
              placeholder="Введите дату задачи"
            />
          </FormBlock>
          <FormBlock>
            <StyledText style={styles.inputTitle}>Время</StyledText>
            <Input
              showSoftInputOnFocus={false}
              onFocus={timeInputFocusHandler}
              value={formatDateToTime(task.date)}
              placeholder="Введите время задачи"
            />
          </FormBlock>
        </View>
        <Button disabled={disableConfirmButton()} onPress={confirmPressHandler}>
          Подтвердить
        </Button>
      </ScrollView>
      <DatePicker
        modal
        locale="ru"
        open={dateModalIsOpen}
        title={'Выберите дату'}
        mode="date"
        confirmText="Подтвердить"
        cancelText="Отмена"
        date={task.date ? new Date(task.date) : new Date()}
        onConfirm={date => {
          setDateModalIsOpen(false);
          changeValueHandler({
            field: 'date',
            value: moment(date).toISOString().toString(),
          });
        }}
        onCancel={() => {
          setDateModalIsOpen(false);
        }}
      />
      <DatePicker
        modal
        title={'Выберите время'}
        locale="ru"
        open={timeModalIsOpen}
        mode="time"
        confirmText="Подтвердить"
        cancelText="Отмена"
        is24hourSource="locale"
        date={task.date ? new Date(task.date) : new Date()}
        onConfirm={date => {
          setTimeModalIsOpen(false);
          changeValueHandler({
            field: 'date',
            value: moment(date).toISOString().toString(),
          });
        }}
        onCancel={() => {
          setTimeModalIsOpen(false);
        }}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  inputTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  descriptionInput: {
    height: 140,
  },
});

export default TaskForm;
