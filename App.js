/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {UtilityThemeProvider, Box, Text} from 'react-native-design-utility';

import Navigation from './src/screens';
import {images} from './src/constants/images';
import {theme} from './src/constants/theme';

export default class App extends Component {
  render() {
    return (
      <UtilityThemeProvider theme={theme}>
      <Navigation />
      </UtilityThemeProvider>
    );
  }
}
