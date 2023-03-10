import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import TopView from './TopView';
import CenterView from './CenterView';
import BottomView from './BottomView';

// State and Props 
// useEffect

// var flag = 100;

export default function Profile({navigation, route}) {
  
  // flag = 100000;
  const [count, setCount] = useState(16)
  console.log('Top Space');
  useEffect(()=>{
    console.log('I am useEffect Function',route.params.name)
    setCount(56)

    return()=>{
        console.log('Return')
    }
  },[])

  return (
    <View style={styles.container}>
        <Text>I am Profile Screen</Text>
     {/* <TopView backbutton={false}  />
     <CenterView />
     <BottomView /> */}
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
