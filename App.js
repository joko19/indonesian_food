import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Menu from './src/component/Menu';
import ListFood from './src/component/ListFood'
import MoreInformation from './src/component/MoreInformation'
import AboutApp from './src/component/AboutApp'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          headerVisible: false,
        }}>
        <Stack.Screen name="menu" component={Menu} />
        <Stack.Screen name="listFood" component={ListFood}/>
        <Stack.Screen name="moreInformation" component={MoreInformation}/>
        <Stack.Screen name="aboutApp" component={AboutApp}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
