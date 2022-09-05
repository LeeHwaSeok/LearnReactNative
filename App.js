import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import AddTodo from './components/AddTodo';
import DateHaed from './components/DataHead';
import Empty from './components/Empty';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import TodoList from './components/Todolist';
import todosStorage from './todosStorages';
function App() {
  const today = new Date();

  const [todos, setTodos] = useState([
    {id: 1, text: '작업환결 설정', done: true},
    {id: 2, text: 'React-Native 기초 공부', done: false},
    {id: 3, text: 'makes Todolist', done: false},
  ]);

  useEffect(() => {
    todosStorage.get().then(setTodos).catch(console.error);
  }, []);

  useEffect(() => {
    todosStorage.set(todos).catch(console.error);
  }, [todos]);

  const onInsert = text => {
    const nextId =
      todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
    const todo = {
      id: nextId,
      text: text,
      done: false,
    };
    setTodos(todos.concat(todo));
  };

  const onToggle = id => {
    const nextTodos = todos.map(todo =>
      todo.id === id ? {...todo, done: !todo.done} : todo,
    );
    setTodos(nextTodos);
  };

  const onRemove = id => {
    const nextTodos = todos.filter(todo => todo.id !== id);
    setTodos(nextTodos);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']} style={styles.block}>
        <DateHaed date={today} />
        {/*
        addtodo => text형식으로 할 일을 작성하면 해당 값을 추가해주는 기능
        todoList => addtodo에서 추가 된 값들을 app화면에 띄어주는 기능을 함
        */}
        {todos.length === 0 ? (
          <Empty />
        ) : (
          <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
        )}
        <AddTodo onInsert={onInsert} />
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
