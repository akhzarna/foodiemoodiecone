import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import TopView from './TopView';
import CenterView from './CenterView';
import BottomView from './BottomView';

// State and Props 
// useEffect

// var flag = 100;

export default function App() {
  
  // flag = 100000;
  const [count, setCount] = useState(16)
  console.log('Top Space');
  useEffect(()=>{
    console.log('I am useEffect Function')
    setCount(56)
  },[])

  return (
    <View style={styles.container}>
     <TopView backbutton={false}  />
     <CenterView />
     <BottomView />
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
