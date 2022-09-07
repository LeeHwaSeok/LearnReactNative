import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function TodoItem({id, text, done, onToggle, onRemove}) {
  /**
   * static alert(title, message?, buttons?, options?)
   * title => 제목
   * message => 내용
   * buttons => 버튼 구성방식, style 문법은 android에서 사용되지 않음
   * optionss =>
   *  1. cancelable => 상자 밖을 눌려서 끄는기능
   *  2. onDismiss => 상자가 꺼지면 어떤행동을할지?
   *  3. onPress(삭제, 취소) => 해당 버튼을 누르면 이하 내용 실행
   */
  const remove = () => {
    Alert.alert(
      '삭제',
      '정말로 삭제 하시겠어요?',
      [
        {
          text: '삭제',
          onPress: () => {
            onRemove(id);
          },
          style: 'destructive',
        },

        {text: '취소', onPress: () => {}, style: 'cancel'},
      ],
      {
        cancelable: true,
        onDismiss: () => {},
      },
    );
  };

  return (
    <View style={styles.item}>
      {/**
       * TouchableOpacity : < /> 해당 구역 <>
       * 해당 구역을 click이 가능하게 끔 도와주는 함수
       * 여기서는 text박스 앞에 흰색 동그라미가 그 기능을 함.
       */}
      <TouchableOpacity onPress={() => onToggle(id)}>
        <View style={[styles.circle, done && styles.filled]}>
          {done && (
            <Image
              source={require('../assets/assets/icons/check_white/check_white.png')}
            />
          )}
        </View>
      </TouchableOpacity>
      <Text style={[styles.text, done && styles.lineThrough]}>{text}</Text>
      {done ? (
        /**
         * delete icon을 클릭했을 때,
         */
        <TouchableOpacity onPress={remove}>
          <Icon name="delete" size={32} color="red" />
        </TouchableOpacity>
      ) : (
        <View style={styles.removePlacheholder} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderColor: '#26a69a',
    borderWidth: 1,
    marginRight: 16,
  },
  text: {
    flex: 1,
    fontSie: 16,
    color: '#212121',
  },
  filled: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#26a69a',
  },
  lineThrough: {
    color: '#9e9e9e',
    textDecorationLine: 'line-through',
  },
  removePlacheholder: {
    width: 32,
    height: 32,
  },
});

export default TodoItem;
