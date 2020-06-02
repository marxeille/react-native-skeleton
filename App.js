import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/pages/Home';
import AsyncStorage from '@react-native-community/async-storage';

import dva from './src/utils/dva';
import { persistStore, persistReducer } from 'redux-persist';
import user from './src/models/user';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const persistConfig = {
  timeout: 1000, // you can define your time. But is required.
  key: '@EF24',
  AsyncStorage,
  whitelist: ['user'],
};

const persistEnhancer = () => (createStore) => (reducer, initialState, enhancer) => {
  const store = createStore(persistReducer(persistConfig, reducer), initialState, enhancer);
  const persist = persistStore(store, null);
  return {
    persist,
    ...store,
  };
};

const app = dva({
  initialState: {},
  models: [user],
  config: {
    extraEnhancers: [persistEnhancer()],
  },
  onError(e) {
    console.log('onError', e);
  },
});

const EF24 = app.start(<App />);

export default EF24;
