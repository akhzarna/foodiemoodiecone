import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TopView from './TopView';
import CenterView from './CenterView';
import BottomView from './BottomView';

// TextInput ()
// State and Props
// useEffect

// var flag = 100;

export default function App() {

  // const [flag, setFlag] = useState(100)

  // useEffect(()=>{
  //   // fetch()
  //   console.log('BCS Class');
  //   setFlag(flag+1)
  // },[])

  return (
    <View style={styles.container}>
      
      <TopView backbutton={false} flag={100} flag1={200} flag2={300} />
      <CenterView />
      <BottomView />
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
