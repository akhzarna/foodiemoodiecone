import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function RegisterScreen({navigation,route}) {

    console.log(route.params.token);

    loginBtnPressed=()=>{
        console.log('Pressed');
        navigation.navigate('Login')
    }


  return (
    <View style={styles.container}>

        <Text style={{fontSize:40}}> My Name is Register Screen 
        
        I got Data of     {route.params.id}     {route.params.name}     {route.params.rollno}    {route.params.marks} 
        
        </Text>


        <TouchableOpacity onPress={()=>loginBtnPressed()}>
            <Text style={{fontSize:30}}>Register</Text>
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
