// import {FlatList} from 'react-native';

import React from 'react';
import {Container, Header, HeaderTitle, StyledText} from '../components/UI';
import {useAppSelector} from '../redux/hooks';
import {FlatList} from 'react-native';
import TaskItem from '../components/TaskItem';

const Home = () => {
  const {items} = useAppSelector(state => state.tasks);

  return (
    <Container>
      <Header>
        <HeaderTitle>Трекер задач</HeaderTitle>
        <FlatList
          data={items}
          keyExtractor={(_, index) => `task-${index}`}
          ListEmptyComponent={<StyledText>Задачи отсутствуют...</StyledText>}
          renderItem={TaskItem}
        />
      </Header>
    </Container>
  );
};

export default Home;
