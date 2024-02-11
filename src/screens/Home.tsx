import React, {useEffect, useMemo, useState} from 'react';
import {StyleSheet} from 'react-native';
import {Container} from '../components/UI';

import {useAppDispatch, useAppSelector} from '../redux/hooks';
import Button from '../components/UI/Button';
import {useNavigation} from '@react-navigation/native';
import {NavigationScreens} from '../types/navigation.types';
import Header from '../components/Header';
import TasksList from '../components/TasksList';
import {getTasksFromStorage} from '../redux/slices/tasksSlice';
import FilterTasks from '../components/FilterTasks';
import {Filter} from '../types/main.types';
import {changeFilter} from '../helpers/changeFilter';

const Home = () => {
  const {items} = useAppSelector(state => state.tasks);

  const navigation = useNavigation<NavigationScreens>();
  const dispatch = useAppDispatch();

  const [activeFilter, setActiveFilter] = useState<Filter>('all');
  const [search, setSearch] = useState('');

  const filteredItems = useMemo(() => {
    return items
      .filter(item =>
        item.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()),
      )
      .filter(item => changeFilter(item, activeFilter));
  }, [search, activeFilter, items]);

  const addTaskPressHandler = () => {
    navigation.navigate('TaskForm');
  };

  useEffect(() => {
    dispatch(getTasksFromStorage());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container style={styles.container}>
      <Header disableBackNavigation={true}>Трекер задач</Header>
      <FilterTasks
        onSearch={setSearch}
        onChangeFilter={setActiveFilter}
        activeFilter={activeFilter}
      />
      <TasksList items={filteredItems} />
      <Button onPress={addTaskPressHandler}>Добавить задачу</Button>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 15,
  },
});

export default Home;
