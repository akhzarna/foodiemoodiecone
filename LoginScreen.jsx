import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import TopView from './TopView';
import CenterView from './CenterView';
import BottomView from './BottomView';

// State and Props 
// useEffect

// var flag = 100;

export default function LoginScreen({navigation}) {
  
  // flag = 100000;
  const [count, setCount] = useState(16)
  console.log('Top Space');
  useEffect(()=>{
    console.log('I am useEffect Function')
    setCount(56)
  },[])

  const myOwnFunction = ()=>{
    // Alert.alert('I am pressed')
    console.log('I am pressed')
    navigation.navigate('Profile', {name: 'Jane'})
  } 

  return (
    <View style={styles.container}>
     {/* <TopView backbutton={false} /> */}

     <View style={{
    flex: 0.1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  }}>

    <TouchableOpacity style={{backgroundColor:'lightgrey',
                    marginBottom:10, height:70, flexDirection:'row'}}
                    onPress={()=>myOwnFunction()}
                    >
     
        <Text style={{fontSize:40}}> I am False </Text>

    </TouchableOpacity>
    </View>

     <CenterView nav={navigation} />
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
