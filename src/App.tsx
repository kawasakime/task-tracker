/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {AppContainer} from './components/UI';
import Navigation from './Navigation';
import {Provider} from 'react-redux';

import {store} from './redux/store';
import {StatusBar} from 'react-native';
import {colors} from './constants/variables';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
      <AppContainer>
        <Navigation />
      </AppContainer>
    </Provider>
  );
}

export default App;
