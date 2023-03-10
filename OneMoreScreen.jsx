import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function OneMoreScreen({navigation}) {


    settingBtnPressed=()=>{
        // console.log('Pressed');
        navigation.navigate('Home',{data:'Testing'})
    }


  return (
    <View style={styles.container}>
       
       <Text style={{fontSize:45}}> I am OneMoreScreen </Text>

        <TouchableOpacity onPress={()=>settingBtnPressed()}>
            <Text style={{fontSize:30}}>Setting</Text>
        </TouchableOpacity>

   
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
