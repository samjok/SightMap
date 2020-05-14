import React, {useState} from 'react';
import {View, Button, StyleSheet, Text, Dimensions} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {setScreen} from '../reducers/activeScreenReducer';
import MapView, {PROVIDER_GOOGLE, Marker, Circle} from 'react-native-maps';
import {setCard} from '../reducers/cardReducer';

const MapScreen = () => {
  const activity = useSelector(state => state.activeScreen);
  const dispatch = useDispatch();
  const openWindow = index => {
    console.log(activity);
    dispatch(setCard(index));
    dispatch(setScreen());
    console.log(activity);
  };

  const window = Dimensions.get('window');
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        zoomControlEnabled={true}
        moveOnMarkerPress={false}
        region={{
          latitude: 60.439136,
          longitude: 22.245237,
          latitudeDelta: 0.019,
          longitudeDelta: 0.019,
        }}>
        <Marker
          coordinate={{
            latitude: 60.440764,
            longitude: 22.254013,
          }}
          onPress={() => openWindow(0)}
          title="Martinkirkko"
        />
        <Marker
          coordinate={{
            latitude: 60.436315,
            longitude: 22.237137,
          }}
          onPress={() => openWindow(1)}
          title="Suomen Joutsen"
        />
        <Marker
          coordinate={{
            latitude: 60.44092,
            longitude: 22.24867,
          }}
          onPress={() => openWindow(2)}
          title="Föri"
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 510,
    width: window.width,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default MapScreen;
