import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import AddTodo from './components/AddTodo';
import DateHaed from './components/DataHead';
import Empty from './components/Empty';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import TodoList from './components/Todolist';
import todosStorage from './todosStorages';

function App() {
  /*Date 함수로 오늘 날짜를 받아옴*/
  const today = new Date();

  /** todolist의 초기 값 세팅
   * id = int
   * text = String
   * done = bool
   */
  const [todos, setTodos] = useState([
    {id: 1, text: '작업환결 설정', done: true},
    {id: 2, text: 'React-Native 기초 공부', done: false},
    {id: 3, text: 'makes Todolist', done: false},
  ]);

  /**AsyncStorage사용하기
   * 데이터를 읽고 쓸때는 get => set순서를 지킬 것
   * [이전 데이터를 받아서 새로운 데이터를 즉각적으로 피드백 하기 위함]
   * .get.then.catch 형식으로 사용 가능한데 이는 react native의 promise함수와 연관이 있는데
   * useEffect 함수는 Hooks 함수로 컴포넌트가 바뀔 때 마다 코드가 실행 됨
   * 1번 인자 : 주시하고 싶은 값을 배열에 저장 [set 참고]
   * 2번 인자 : 주시하고 싶은 값이 바뀌었을 때 호출 값[get, set 참고]
   *  get() => 데이터 불러오기
   *  savedTodos의 return값을 setTodos에 저장합니다.
   *  set() => 데이터 저장하기
   */
  useEffect(() => {
    todosStorage.get().then(setTodos).catch(console.error);
  }, []);
  // 1. then(r => setTodos(r))을 축약시킨 문법
  // 2. 내가 알고있는 a = todosStorage.get()
  //                 setTodos(a)와 동일하다

  useEffect(() => {
    todosStorage.set(todos).catch(console.error);
  }, [todos]);

  /**
   * onInsert 함수는 새로운 형태의 데이터가 저장될 경우 자동으로 다음 인덱스를 할당 시켜주는 함수
   * length를 체크해서 0보다 클경우는 배열의 최대 값 + 1의 인덱스를 자동 할당 / 아니면 1을 할당
   * setTodos를 통해 추가된 인덱스를 이어붙여 새로운 인덱스로 변환
   */
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

  /**
   * onToggle 함수는 특정 영역에서 클릭을 해서 해당 bool값을 ture or false로 변경합니다.
   * setTodos를 통해 변경된 값을 저장합니다.
   */
  const onToggle = id => {
    const nextTodos = todos.map(todo =>
      todo.id === id ? {...todo, done: !todo.done} : todo,
    );
    setTodos(nextTodos);
  };

  /**
   * onRemove 함수는 선택된 요소를 제거합니다.
   * 표현 방식은 선택 되지 않은 배열을 필터링 하여 해당 배열을 재할당 시킵니다.
   */
  const onRemove = id => {
    const nextTodos = todos.filter(todo => todo.id !== id);
    setTodos(nextTodos);
  };

  return (
    /**
     * SafeAreaproivder는 iphone기준 m자라인(시간, 와이파이, 배터리 잔여량) 커버를 합니다.
     */
    <SafeAreaProvider>
      {/**
       * SafeAreaView는 body line을 커버한다.
       */}
      <SafeAreaView edges={['bottom']} style={styles.block}>
        {/**
         * DateHead 함수에 today(현재 시간)을 매개 변수로 전달
         * widget의 시간을 표현함
         */}
        <DateHaed date={today} />
        {/*
        Empty => 배열이 비었을 경우 'done' 사진을 띄어줌
        todoList => addtodo에서 추가 된 값들을 app화면에 띄어주는 기능을 함
        addtodo => text형식으로 할 일을 작성하면 해당 값을 추가해주는 기능
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
    // backgroundColor: 'black',
  },
});

/**
 * export는 항상 app 맨 마지막에 처리해줘야함
 */
export default App;
