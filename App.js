import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './Home';
import SettingScreen from './Setting';
import OneMoreScreen from './OneMoreScreen';

const Stack = createNativeStackNavigator();

export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
       

      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Setting" component={SettingScreen} options={{ headerShown: false }} />
      <Stack.Screen name="OneMoreScreen" component={OneMoreScreen} options={{ headerShown: false }} />



      </Stack.Navigator>
    </NavigationContainer>
  );
};





{/* <Stack.Screen
name="Home"
component={HomeScreen}
options={{title: 'Welcome'}}
/> */}