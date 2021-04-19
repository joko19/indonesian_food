import React, {useState, useEffect} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {View, Header, Body, Text} from 'native-base';
import apiFood from './../config/endpoint';
import ItemFood from './ItemFood';

function Index({navigation}) {
  const [data, setData] = useState([]);

  const loadData = async () => {
    const response = await apiFood.index();
    setData(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <View>
      <ScrollView>
        {data.map((item, index) => {
          return (
            <ItemFood
              id={item._id}
              key={item._id}
              img={item.cover}
              title={item.name}
              navigation={navigation}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}

export default Index;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  buttonPrimary: {
    height: 30,
    padding: 5,
    margin: 5,
    borderRadius: 10,
    borderWidth: 5,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#0080ff',
  },
  cardImage: {
    height: 180,
    width: 130,
  },
});
