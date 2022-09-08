import AsyncStorage from '@react-native-community/async-storage';

const key = 'todos';
/**
 * AsyncStorage는 4~6mb의 임시 저장공간을 사용하는 api기능입니다.
 * getItem(key) 데이터를 읽어 옵니다. [python의 read]
 * setItem(key,value) 데이터를 작성합니다 [key라는 곳에 JSON.stringify(json 문자타입)으로 저장]
 */
const todosStorage = {
  async get() {
    try {
      const rawTodos = await AsyncStorage.getItem(key);

      //데이터가 없으면 사용하지 않음
      if (!rawTodos) {
        throw new Error('No saved todos');
      }
      const savedTodos = JSON.parse(rawTodos);
      return savedTodos;
    } catch (e) {
      throw new Error('Failed to save todos');
    }
  },

  async set(data) {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      throw new Error('Failed to save todos');
    }
  },
};

export default todosStorage;
