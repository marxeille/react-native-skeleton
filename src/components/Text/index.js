import React from 'react';
import { StyleSheet, Text as RNText } from 'react-native';

const Text = ({ style, children }) => {
  return <RNText style={[defaultStyle.default, style]}>{children}</RNText>;
};

export default Text;

const defaultStyle = StyleSheet.create({
  default: {
    fontSize: 14,
    color: 'red',
  },
});
