/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import type {Node} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  Image,
  Pressable,
  Modal,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import MapView, {Marker} from 'react-native-maps';

const Dashboard: () => Node = () => {
  const tokyoRegion = {
    latitude: 12.85984,
    longitude: 77.43908,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Map View</Text>
      <MapView
      style={{height: "80%", width: '100%'}}
      initialRegion={tokyoRegion}
      showsUserLocation
  >
    <Marker coordinate={tokyoRegion} />
  </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#438AB6',
    fontSize: 60,
    fontWeight: 'bold',
  },
});

export default Dashboard;
