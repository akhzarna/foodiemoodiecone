import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function LoginScreen({navigation}) {


    registerBtnPressed=()=>{
        console.log('Pressed');
        navigation.navigate('Register',{id:107,name:'Umer',rollno:107,marks:90});
    }

  return (
    <View style={styles.container}>

        <Text style={{fontSize:40}}> My Name is Login Screen </Text>
    
        <TouchableOpacity onPress={()=>registerBtnPressed()}>
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
