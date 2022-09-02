import React, {useState} from 'react';
import {SafeAreaView, Button, StyleSheet} from 'react-native';
import Box from './components/Box';
import Counter from './components/Counter';

const App = () => {
  const [count, setCount] = useState(0);

  const onIncrease = () => setCount(count + 1);
  const onDecrease = () => setCount(count - 1);

  return (
    <SafeAreaView style={styles.full}>
      <Counter count={count} onDecrease={onDecrease} onIncrease={onIncrease} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  full: {
    flex: 1,
    // backgroundColor: 'cyan',
  },
});

export default App;
