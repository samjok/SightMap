import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import store from './store';
import MapScreen from './screens/MapScreen';

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

const App = () => {
  const activity = useSelector(state => state.activeScreen);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <MapScreen />
      </SafeAreaView>
    </>
  );
};

export default AppWrapper;
