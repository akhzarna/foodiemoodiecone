import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function TopView(props) {

    if(props.backbutton==true){
        return (
            <View style={styles.container}>
                <Text style={{fontSize:40}}> I am TRUE </Text>
            </View>
          );
    }else{
        return (
            <View style={styles.container}>
                <Text style={{fontSize:40}}> I am False </Text>
            </View>
          );
    }
       
    }
  
const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
