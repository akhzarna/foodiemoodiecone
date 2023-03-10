import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Alert, SectionList } from 'react-native';

export default function HomeScreen({navigation}) {
    
    const [count, setCount] = useState(0)
    const [score, setScore] = useState(0)
    const [font, setFont] = useState()

    const [data, setData] = useState(
      [
      {
        key:0,
        title:'Starters',
        data:[{key:0, title:'Salad'},{key:1, title:'Soup'}, {key:2, title:'Fish Cracker'}]
      },

      {
        key:1,
        title:'Dessi Food',
        data:[{key:0, title:'Karahi'}, {key:1, title:'Kabab'}]
      },

      {
        key:2,
        title:'Fast Food',
        data:[{key:0, title:'Burger'},{key:1, title:'Pizza'},{key:2, title:'Paasta'}, {key:3, title:'Shawarma'}]
      },

      {
        key:3,
        title:'Drinks',
        data:[{key:0, title:'Coke'},{key:1, title:'Fanta'},{key:2, title:'Mint'}, {key:3, title:'Sprite'}]
      },

    ])

    console.log('Top Space')

    settingBtnPressed=()=>{
        navigation.navigate('Setting',{name:'Hamza and Hadi', class:'BS CS'})
        // setCount(count+1)
        // setScore(score+1)
    }

    useEffect(()=>{
      console.log('Home useEffect')
    })

    useEffect(()=>{
      console.log('Home useEffect []')
    },[])

    useEffect(()=>{
      console.log('Home useEffect [count]')
    },[count])

    useEffect(()=>{
      console.log('Home useEffect [score]')
    },[score])

    useEffect(()=>{
      console.log('Home useEffect [count, score]')
    },[count, score])

    useEffect(()=>{
      const unsubscribe = navigation.addListener('focus',()=>{
        console.log('I Back from Setting unsubscribe')
        console.log('Global Variable Contain value',global.fontsize)
        setFont(global.fontsize)
      })
      return unsubscribe 
    }, [navigation])

    // useEffect(()=>{
     
    //   // const unsubscribe = navigation.addListener('focus',()=>{
    //   //   console.log('I Back from Setting unsubscribe')
    //   // })
    //   // return unsubscribe

    // },[navigation])

    // const unsubscribe = navigation.addListener('focus',()=>{
    //   console.log('I Back from Setting unsubscribe')
    // })

  // Test(){

  // }


  const myOwnFunction = (item)=>{
    Alert.alert('I am pressed', item.title)
    // props.nav.navigate('Profile', {name: 'Jane'})
  } 

  return (
    <View style={styles.container}>
      {console.log('Home Return')}
       {/* <Text style={{fontSize:global.fontsize}}> I am Home Screen </Text> */}
        {/* <TouchableOpacity onPress={()=>settingBtnPressed()}>
            <Text style={{fontSize:30, backgroundColor:'lightgrey'}}>Setting</Text>
        </TouchableOpacity> */}

              <SectionList
                sections={data}
                keyExtractor={(item, index) => item + index}
                renderItem={({item}) => (
                  <View style={{flex:1, height:30, backgroundColor:'white'}}>
                    <Text style={{backgroundColor:'grey', color:'white', fontSize:18}}>{item.title}</Text>
                  </View>
                )}
                renderSectionHeader={({section: {title}}) => (

                <View style={{flex:1,height:30, marginBottom:10, backgroundColor:'green'}}>
                  <Text style={{backgroundColor:'green', color:'white', fontSize:22}}>{title}</Text>
                </View>

                )}
              />

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
