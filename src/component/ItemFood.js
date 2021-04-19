import React from 'react';
import {Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {View} from 'native-base';
import {dataUrl} from './../config/config';

export default function ItemFood(props) {
  const handleToDetail = () => {
    props.navigation.navigate('DetailCulture', {
      title: props.title,
    });
    console.log("Detail Clicked")
  };
  return (
    // <TouchableOpacity onPress={handleToDetail}>
      <View style={styles.containerItem}>
        <Image
          style={styles.imgPost}
          source={{uri: dataUrl + props.img}}
        />
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {/* <Image
            style={styles.imgPost}
            style={{width: 50, height: 50, borderRadius: 50, margin: 10}}
            source={{uri: dataUrl + props.img}}
          /> */}
          <View style={{flexDirection: 'column', flex: 0.95, justifyContent: 'center'}}>
            <Text style={styles.namePlace}>nama makanan</Text>
          </View>
        </View>
      </View>
    // </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  containerItem: {
    marginBottom: 25,
  },
  username: {
    flexWrap: 'wrap',
    margin: 5,
    alignSelf: 'center',
    fontSize: 16,
  },
  cover: {
    width: 50,
    height: 50,
    borderRadius: 50,
    margin: 5,
  },
  imgPost: {
    aspectRatio: 1.5,
  },
  namePlace: {
    fontSize: 18,
    fontWeight: '500',
  },
});
