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

  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState({});

  const Regions = [
    {
      title: 'Hostel',
      description: 'Christ University Devadan Boys Hostel',
      latitude: 12.860404454777514, 
      longitude: 77.43946872465499,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    },
    {
      title: 'Canteen',
      description: "Christ University South Canteen",
      latitude: 12.86243540791504, 
      longitude: 77.43903250611494,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    },
    {
      title: 'Basketball Court',
      description: "Christ University Basketball Court 1",
      latitude: 12.86206668553298,
      longitude: 77.43711543137039,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    },
  ];

  const showModal = (title, description) => {
    setModalData({title: title, description: description});
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{modalData.title}</Text>
            <Text>{modalData.description}</Text>
            <Pressable
              style={[styles.modalbutton, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Text style={styles.text}>Map View</Text>
      <MapView
        style={{height: '80%', width: '100%'}}
        initialRegion={Regions[0]}
        showsUserLocation>
        {Regions.map(region => (
          <Marker
            key={region.title}
            onPress={() => {
              showModal(region.title, region.description);
            }}
            coordinate={region}
            title={region.title}
          />
        ))}
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    height: 200,
    backgroundColor: 'white',
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 5,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalbutton: {
    borderRadius: 5,
    padding: 5,
    paddingHorizontal: 20,
    elevation: 2,
    marginTop: 30,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Dashboard;
