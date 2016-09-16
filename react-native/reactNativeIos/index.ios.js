/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, PropTypes } from 'react';
import { AppRegistry, Navigator, Text, TouchableHighlight, View } from 'react-native';

class reactNativeIos extends Component {
  render() {
    return (
      <Text>Hello world!</Text>
    );
  }
}


const reactNativeIo = props => {
  return <Text>nimei</Text>
};

AppRegistry.registerComponent('reactNativeIos',  () => reactNativeIo);
