// @flow
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDvy_CobrRuBG_UfSWTBviEgZY4TiaYOyc',
      authDomain: 'reactnative-auth-90be3.firebaseapp.com',
      databaseURL: 'https://reactnative-auth-90be3.firebaseio.com',
      projectId: 'reactnative-auth-90be3',
      storageBucket: 'reactnative-auth-90be3.appspot.com',
      messagingSenderId: '103891811582'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <Text>An App!</Text>
      </View>
    );
  }
}

export default App;
