import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function TopView(props) {

    if(props.backbutton){
        return (

            <View style={styles.container}>
                <Text style={{fontSize:40}}>Back Button is TRUE 
                </Text>
        
            </View>
          );
    }else{
        return (

            <View style={styles.container}>
                <Text style={{fontSize:40}}>Back Button False 
               
                </Text>
        
            </View>
          );
    }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
