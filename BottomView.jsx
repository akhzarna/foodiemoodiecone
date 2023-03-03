import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function BottomView() {

        return (
            <View style={styles.container}>
                <Text style={{fontSize:40}}> I am Bottom View </Text>
            </View>
          );
    }
  
const styles = StyleSheet.create({
  container: {
    flex: 0.10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
