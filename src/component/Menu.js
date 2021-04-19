import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text} from 'native-base';
import {TouchableOpacity} from 'react-native-gesture-handler';

function Menu({navigation}) {
  const toDetail = params => {
    navigation.navigate(params);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.item} onPress={() => toDetail('listFood')}>
        <Text style={styles.title}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item} onPress={() => toDetail('aboutApp')}>
        <Text style={styles.title}>About App</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item} onPress={() => toDetail('moreInformation')}>
        <Text style={styles.title}>More Information</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Menu;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
    height: '100%',
    justifyContent: 'center',
  },
  item: {
    backgroundColor: 'gainsboro',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    width: 150,
  },
  title: {
    fontWeight: 'bold',
  },
  desc: {
    fontStyle: 'italic',
  },
});
