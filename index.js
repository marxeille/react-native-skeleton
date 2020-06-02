/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { buildTheme } from './src/config-theme';
import EF24 from './App';

buildTheme();

AppRegistry.registerComponent(appName, () => EF24);
