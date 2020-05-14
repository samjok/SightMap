import React, {useState} from 'react';
import {View, Button, StyleSheet, Text, Dimensions} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {setScreen} from '../reducers/activeScreenReducer';
import MapView, {PROVIDER_GOOGLE, Marker, Circle} from 'react-native-maps';

const MapScreen = () => {
  const activity = useSelector(state => state.activeScreen);
  const dispatch = useDispatch();
  const openWindow = () => {
    console.log(activity);
    dispatch(setScreen());
    console.log(activity);
  };

  const window = Dimensions.get('window');
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: 60.440382,
          longitude: 22.252347,
          latitudeDelta: 0.009,
          longitudeDelta: 0.009,
        }}>
        <Marker
          coordinate={{
            latitude: 60.440764,
            longitude: 22.254013,
          }}
          onPress={openWindow}
          title="Martinkirkko"
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: window.width,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default MapScreen;
