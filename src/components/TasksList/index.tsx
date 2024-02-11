import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {TaskItemProps, TasksListProps} from '../../interfaces/main.interfaces';
import EmptyContainer from '../EmptyContainer';
import TaskItem from '../TaskItem';
import {VerticalSeparator} from '../UI';
import FilterTasks from '../FilterTasks';

const TasksList = ({items}: TasksListProps) => {
  const renderItem = ({item, index}: TaskItemProps) => {
    return <TaskItem index={index} item={item} />;
  };

  return (
    <FlatList
      StickyHeaderComponent={FilterTasks}
      style={styles.flatlist}
      contentContainerStyle={styles.flatListContainer}
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={VerticalSeparator}
      data={items}
      keyExtractor={(_, index) => `task-${index}`}
      ListEmptyComponent={
        <EmptyContainer>Задачи отсутствуют...</EmptyContainer>
      }
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  flatlist: {
    marginBottom: 10,
  },
  flatListContainer: {
    flexGrow: 1,
  },
});

export default TasksList;
