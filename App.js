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
import store from './store';
import MapScreen from './screens/MapScreen';
import InfoMartinkirkko from './screens/martinkirkko/InfoMartinkirkko';
import {setCard} from './reducers/cardReducer';
import InfoSuomenjoutsen from './screens/suomenjoutsen/InfoSuomenjoutsen';
import InfoFori from './screens/fori/InfoFori';

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

const App = () => {
  const activity = useSelector(state => state.activeScreen);
  const card = useSelector(state => state.card);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        {!activity && <MapScreen />}
        {activity && card === 0 && <InfoMartinkirkko />}
        {activity && card === 1 && <InfoSuomenjoutsen />}
        {activity && card === 2 && <InfoFori />}
      </SafeAreaView>
    </>
  );
};

export default AppWrapper;
