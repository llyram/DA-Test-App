/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
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

import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import AnimatedMapRegion from 'react-native-maps/lib/AnimatedRegion';

const GoogleLogin = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState();

  GoogleSignin.configure({
    webClientId:
      '293064163996-k4fcpfbs6i43vqmdejeddbqj91i29v0i.apps.googleusercontent.com',
  });

  const signInWithGoogleAsync = async () => {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    const user_sign_in = auth().signInWithCredential(googleCredential);

    user_sign_in
      .then(user => {
        console.log(user);
        setLoggedIn(true);
        setUserInfo(user);
      })
      .catch(error => {
        console.log(error);
      });
  };

  signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      setLoggedIn(false);
      setUserInfo();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent:"center"}}>
      {loggedIn && userInfo ? (
        <View>
        <View style={{flexDirection:"row", paddingBottom:20}}>
          {console.log(userInfo.user.displayName)}
          <Image
            style={{height: 100, width: 100, borderRadius: 25, resizeMode:'contain'}}
            source={{uri: userInfo.user.photoURL}}
          />
          <View style={{justifyContent:"center", padding:10}}>
          <Text style={{fontWeight:"bold", fontSize:20}}>{userInfo.user.displayName}</Text>
          <Text>{userInfo.user.email}</Text>
          </View>
            </View>
          <Button title="Log Out" onPress={signOut} />
        </View>

      ) : (
        <Button title="Sign in with Google" onPress={signInWithGoogleAsync} />
      )}
    </View>
  );
};

export default GoogleLogin;
