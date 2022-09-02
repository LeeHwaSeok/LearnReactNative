import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import AddTodo from './components/AddTodo';
import DateHaed from './components/DataHead';
import Empty from './components/Empty';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App() {
  const today = new Date();

  const [todos, setTodos] = useState([
    {id: 1, text: '작업환결 설정', done: true},
    {id: 2, text: 'React-Native 기초 공부', done: false},
    {id: 3, text: 'makes Todolist', done: false},
  ]);

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']} style={styles.block}>
        <DateHaed date={today} />
        <Empty />
        <AddTodo />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});

export default App;
