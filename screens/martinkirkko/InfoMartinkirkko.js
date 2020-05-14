import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  View,
  Button,
  Image,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {setScreen} from '../../reducers/activeScreenReducer';

const InfoMartinkirkko = props => {
  const dispatch = useDispatch();
  const window = Dimensions.get('window');

  const closeWindow = () => {
    dispatch(setScreen());
  };

  return (
    <>
      <View style={styles.container}>
        <Image source={require('./kirkko.png')} style={styles.image} />
      </View>
      <View style={styles.infoBox}>
        <Text style={styles.text}>
          Vuonna 1933 käyttöön vihitty Martinkirkko sijaitsee lähellä Aurajokea
          Martin kaupunginosassa.
        </Text>
        <View style={styles.btnContainer}>
          <Button
            title="Back to map"
            style={styles.btn}
            onPress={closeWindow}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    width: window.width,
    height: 470,
  },
  container: {
    width: window.width,
    justifyContent: 'center',
  },
  infoBox: {
    width: window.width,
  },
  text: {
    margin: 10,
    fontSize: 15,
  },
  btn: {
    width: 170,
  },
  btnContainer: {
    width: window.width,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 100,
    bottom: 0,
  },
});

export default InfoMartinkirkko;
