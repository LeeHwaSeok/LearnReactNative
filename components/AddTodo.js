import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableNativeFeedback,
  Keyboard,
} from 'react-native';

function AddTodo() {
  const [text, setText] = useState('');

  const onPress = () => {
    setText('');
    Keyboard.dismiss();
  };

  return (
    <View style={styles.block}>
      <TextInput
        placeholder="할 일을 입력하세요"
        style={styles.input}
        value={text}
        onChangeText={setText}
        onSubmitEditing={onPress}
        returnKeyType="done"
      />
      <View style={styles.circleWrapper}>
        <TouchableNativeFeedback onPress={onPress}>
          <View style={styles.buttonStyle}>
            <Image
              source={require('../assets/assets/icons/add_white/add_white.png')}
            />
          </View>
        </TouchableNativeFeedback>
      </View>
    </View>
  );
}

// 버튼 border
const button_circle_border = 24;
const styles = StyleSheet.create({
  block: {
    height: 64,
    paddingHorizontal: 16,
    borderColor: '#bdbdbd',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 8,
  },
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,
    backgroundColor: '#26a69a',
    borderRadius: button_circle_border,
  },
  circleWrapper: {
    overflow: 'hidden',
    borderRadius: button_circle_border,
  },
});

export default AddTodo;
