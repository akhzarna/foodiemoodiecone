import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

export default function SettingScreen({navigation, route}) {

    const [count, setCount] = useState(0)
    const [score, setScore] = useState(0)
    
    
    // Only for Text Input Value
    const [text, setText] = useState()

    applyFontBtnPressed=()=>{

      global.fontsize=text
      console.log('What is in TEXT Variable',global.fontsize)
      navigation.navigate('Home')
    }

    useEffect(()=>{
      // console.log('Kuch Bhi nahin')
    })

    useEffect(()=>{
      // console.log('Only [] Bracket')
      return()=>{
        console.log('Yes i am going back from setting screen')
      }
    },[])

    useEffect(()=>{
      // console.log('Only Count')
    },[count])

    useEffect(()=>{
      // console.log('Only Score')
    },[score])

    useEffect(()=>{
      // console.log('Count and Score')
    },[count, score])

    useEffect(()=>{
      // console.log('text is = ',text)
    },[text])


    useEffect(()=>{
      const unsubscribe = navigation.addListener('focus',()=>{
        console.log('Next Screen')
        // setFont(global.fontsize)
      })
      return unsubscribe 
    }, [])

  return (
    <View style={styles.container}>
       {/* {console.log('Setting return')} */}

        <Text style={{marginTop:30, fontSize:30}}>set Font</Text>
        
        <TextInput
          style={{marginTop:20, backgroundColor:'lightgrey', width:120, height:40, fontSize:30}}
          
          onChangeText={setText}
          value={text}
        />

        <TouchableOpacity onPress={()=>applyFontBtnPressed()}>
            <Text style={{marginTop:10,fontSize:30, backgroundColor:'lightgrey'}}>Apply</Text>
        </TouchableOpacity>

    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:100,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
