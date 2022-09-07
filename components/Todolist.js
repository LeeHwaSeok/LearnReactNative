import React from 'react';
import {FlatList, View, StyleSheet} from 'react-native';
import TodoItem from './TodoItem';

function TodoList({todos, onToggle, onRemove}) {
  /**
   * FlatList => flutter listView
   * ItemSeparatorComponent children사이에 밑줄 긋기
   * 기본 구성요소 data, renderItem, keyExractor
   * keyExractor => 딕션(배열)의 key value
   * data를 통해 배열의 정보를 렌더링합니다.
   * item(object) : 데이터가 렌더링 되는 항목입니다.
   * 즉 data(todos)의 id, text, done을 사용하려면
   * item.id, item.text, item.don 형식을 맞춰줘야합니다.
   *
   */
  return (
    <FlatList
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      style={styles.list}
      data={todos}
      renderItem={({item}) => (
        <TodoItem
          id={item.id}
          text={item.text}
          done={item.done}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      )}
      keyExtractor={item => item.id.toString()}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  separator: {
    backgroundColor: '#e0e0e0',
    height: 1,
  },
});

export default TodoList;
