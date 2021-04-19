import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

function MoreInformation() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Developer</Text>
      <Text style={styles.text}>Joko Slamet | 18050974030</Text>
      <Text style={styles.title}></Text>
      <Text style={styles.title}>UI/UX</Text>
      <Text style={styles.text}>Yeremia Alfa Dio | 18050974002</Text>
      <Text style={styles.title}></Text>
      <Text style={styles.title}>Content Creator</Text>
      <Text style={styles.text}>Erlina Intan Pratiwi | 18050974014</Text>
    </View>
  );
}

export default MoreInformation;

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
