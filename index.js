/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { buildTheme } from './src/config-theme';

buildTheme();

AppRegistry.registerComponent(appName, () => App);
