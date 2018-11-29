import React from 'react';
import {Image, StyleSheet, Text, View, Button, Alert, TouchableOpacity} from 'react-native';
import { Audio } from 'expo';



export default class App extends React.Component {


  render() {

      return (

      <View style={styles.container}>
          <TouchableOpacity
              onPress={async () => {
                  const soundObject = new Audio.Sound();
                  try {
                      await soundObject.loadAsync(require('./assets/hello.m4a'));
                      await soundObject.playAsync();
                      // Your sound is playing!
                  } catch (error) {
                      // An error occurred!
                  }
              }}>
            <Image source={require('./assets/smile.png')}
                   style={{
                       height: 150,
                       width: 150,
                       borderWidth: 1,
                       borderRadius: 75
                   }}/>
          </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});