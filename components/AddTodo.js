import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableNativeFeedback,
  Keyboard,
} from 'react-native';

function AddTodo({onInsert}) {
  const [text, setText] = useState('');

  const onPress = () => {
    onInsert(text);
    setText('');
    Keyboard.dismiss();
  };

  return (
    <View style={styles.block}>
      <TextInput
        /*placeholder => flutter의 texthint와 대비되는 함수*/
        placeholder="할 일을 입력하세요"
        style={styles.input}
        /*value는 textinput을 보여주는 매겨변수입니다.*/
        value={text}
        /*onChangeText는 텍스트의 변화를 감지할 때마다, 업데이트*/
        onChangeText={setText}
        /*onSubmitEditing는 Enter를 눌렀을 때, 호출되는 함수*/
        onSubmitEditing={onPress}
        returnKeyType="done"
      />
      <View style={styles.circleWrapper}>
        {/*TouchableNativeFeedback은 안드로이드 터치처럼 물결형식으로 퍼지는 효과를 주기 위함*/}
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
