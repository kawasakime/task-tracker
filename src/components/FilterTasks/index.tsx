import React, {useCallback, useMemo, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import Input from '../UI/Input';
import {FilterTasksProps} from '../../interfaces/main.interfaces';
import {filters} from '../../constants/filters';
import FilterButton from './FilterButton';
import debounce from 'lodash.debounce';

const FilterTasks = ({
  onChangeFilter,
  onSearch,
  activeFilter,
}: FilterTasksProps) => {
  const [searchValue, setSearchValue] = useState('');

  const debouncedSearch = useMemo(
    () =>
      debounce(value => {
        onSearch(value);
      }, 350),
    [onSearch],
  );

  const textChangeHandler = useCallback(
    (value: string) => {
      setSearchValue(value);
      debouncedSearch(value);
    },
    [debouncedSearch],
  );

  return (
    <View>
      <Input
        value={searchValue}
        onChangeText={textChangeHandler}
        placeholder="Поиск по названию..."
      />
      <ScrollView style={styles.filterBtnsContainer} horizontal>
        {filters.map(item => (
          <FilterButton
            key={item.value}
            onPress={() => onChangeFilter(item.value)}
            isActive={item.value === activeFilter}>
            {item.title}
          </FilterButton>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  filterBtnsContainer: {
    marginVertical: 10,
  },
});

export default FilterTasks;
