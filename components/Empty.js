import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

function Empty() {
  return (
    <View style={styles.block}>
      <Image
        // source={{uri: 'https://reactjs.org/logo-og.png'}}
        // style={{width: 400, height: 400}}
        source={require('../assets/assets/images/young_and_happy.png')}
        style={styles.img}
      />
      <Text style={styles.description}> done </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    fontSize: 24,
    color: '#9e9e9e',
  },
  img: {
    width: 240,
    height: 179,
    marginBottom: 16,
  },
});

export default Empty;
