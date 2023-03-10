import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Alert } from 'react-native';

export default function CenterView(props) {
      
      const [data, setData] = useState(
        [
        {key:0,
          title:'Amir',
          message:'Hello',
          unread:3,
          time:'3:15 PM'
          },
      
          {key:1,
            title:'Mustaneer',
            message:'I am Coming',
            unread:2,
            time:'3:10 PM'
            },
      
            {key:2,
              title:'Khalid',
              message:'Aa raha hun',
              unread:3,
              time:'3:05 PM'
              },
      ])

      useEffect(()=>{
        console.log('Nav', props.nav)
      },[])

      const myOwnFunction = (item)=>{
        // Alert.alert('I am pressed', item.title)

        props.nav.navigate('Profile', {name: 'Jane'})

      } 

        return (
            <View style={styles.container}>
                <Text style={{fontSize:40}}>I am center View </Text>

                <FlatList 
                  data={data}
                  keyExtractor={item=>item.key}
                  renderItem={({item})=>(
                  
                  <TouchableOpacity style={{backgroundColor:'lightgrey',
                    marginBottom:10, height:70, flexDirection:'row'}}
                    onPress={()=>myOwnFunction(item)}
                    >

                      <View style={{flex:0.2}}>
                        {/* Place Image Here */}
                      </View>
                      <View style={{flex:0.6}}>
                        <View style={{flex:0.5,}}>
                          <Text style={{fontSize:32}}>{item.title}</Text>
                        </View>
                        <View style={{flex:0.5}}>
                        <Text style={{fontSize:32}}>{item.message}</Text>
                        </View>
                      </View>
                      <View style={{flex:0.2}}>

                      <View style={{flex:0.5}}>
                      <Text style={{fontSize:26}}>{item.time}</Text>
                      </View>
                      <View style={{flex:0.5}}>
                      <Text style={{fontSize:32}}>{item.unread}</Text>
                      </View>

                      </View>

                      
                     
                    </TouchableOpacity>


                  )}
                />
            </View>
          );
    }
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
