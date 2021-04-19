import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

function AboutApp() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Indonesian Food adalah sebuah aplikasi
        ......................................... 
      </Text>
    </View>
  );
}

export default AboutApp;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gainsboro',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    alignContent: 'center',
    alignSelf: 'center',
  },
  title: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
  },
});
