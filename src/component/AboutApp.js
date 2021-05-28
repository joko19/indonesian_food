import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

function AboutApp() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Indonesian Food adalah sebuah aplikasi yang berisi keragaman makanan khas yang ada di Indonesia. 
      </Text>
    </View>
  );
}

export default AboutApp;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00c853',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    alignContent: 'center',
    alignSelf: 'center',
    padding: 25
  },
  title: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
  },
});
