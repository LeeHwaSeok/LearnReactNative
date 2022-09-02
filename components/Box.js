import React from 'react';

import {View, StyleSheet} from 'react-native';

function Box({rounded, size, color}) {
  return (
    <View
      style={[
        style.box,
        rounded ? style.rounded : null,
        sizes[size],
        {
          backgroundColor: color,
        },
      ]}
    />
  );
}

Box.defaultProps = {
  size: 'medium',
  color: 'blue',
};

const style = StyleSheet.create({
  box: {
    width: 64,
    height: 64,
    backgroundColor: 'black',
  },
  rounded: {
    borderRadius: 16,
  },
  small: {
    width: 32,
    height: 32,
  },
  medium: {
    width: 64,
    height: 64,
  },
  large: {
    width: 128,
    height: 128,
  },
});

const sizes = {
  small: style.small,
  medium: style.medium,
  large: style.large,
};

export default Box;
