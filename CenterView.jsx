import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Alert } from 'react-native';

export default function CenterView() {
  
  const [myarray, setMyarray] = useState([
    {
    key:0, 
    name:'Shoaib Rana',
    message:'Hello How are you',
    image:'nil',
    time:'8:45 AM',
    unread:2
    },
  
    {
      key:1, 
      name:'Ali',
      message:'Where How are you',
      image:'nil',
      time:'8:45 AM',
      unread:2
      },
  
      {
        key:2, 
        name:'Amir',
        message:'Kahaan Ho',
        image:'nil',
        time:'8:45 AM',
        unread:2
        },
  
        {
          key:3, 
          name:'Anam',
          message:'Yes',
          image:'nil',
          time:'8:45 AM',
          unread:2
          },
  
          {
            key:4, 
            name:'AMina',
            message:'I am here',
            image:'nil',
            time:'8:45 AM',
            unread:2
            },
  
            {
              key:5, 
              name:'Shahzaib',
              message:'Main yahaan hun',
              image:'nil',
              time:'8:45 AM',
              unread:2
              },
              {
                key:6, 
                name:'Shoaib Rana',
                message:'Hello How are you',
                image:'nil',
                time:'8:45 AM',
                unread:2
                },
              
                {
                  key:7, 
                  name:'Ali',
                  message:'Where How are you',
                  image:'nil',
                  time:'8:45 AM',
                  unread:2
                  },
              
                  {
                    key:8, 
                    name:'Amir',
                    message:'Kahaan Ho',
                    image:'nil',
                    time:'8:45 AM',
                    unread:2
                    },
              
                    {
                      key:9, 
                      name:'Anam',
                      message:'Yes',
                      image:'nil',
                      time:'8:45 AM',
                      unread:2
                      },
              
                      {
                        key:10, 
                        name:'AMina',
                        message:'I am here',
                        image:'nil',
                        time:'8:45 AM',
                        unread:2
                        },
              
                        {
                          key:11, 
                          name:'Shahzaib',
                          message:'Main yahaan hun',
                          image:'nil',
                          time:'8:45 AM',
                          unread:2
                          }
  ])

  const myOnClick = (item) => {
    Alert.alert('Name = '+item.name)
  }


        return (
            <View style={styles.container}>
                <FlatList
                  data={myarray}
                  keyExtractor={item=>item.key}
                  renderItem={({item})=>(
                    
                    <TouchableOpacity style={{
                      marginBottom:10, 
                      backgroundColor:'lightgrey',
                      flex:1, 
                      flexDirection:'row',
                      height:60
                      }} onPress={()=>myOnClick(item)} >

                      <View style={{flex:0.2}}>
                        <Text>TASVEEER</Text>
                      </View>
                      <View style={{flex:0.6}}>
                      {/* <Text>123</Text> */}
                        <View style={{flex:0.5}}>
                        <Text style={{fontSize:18}}>{item.name}</Text>
                        </View>
                        <View style={{flex:0.5}}>
                        <Text>{item.message}</Text>
                        </View>
                      </View>
                      <View style={{flex:0.2}}>

                      <View style={{flex:0.5}}>
                        <Text>{item.time}</Text>
                        </View>
                        <View style={{flex:0.5}}>
                        <Text>{item.unread}</Text>
                        </View>

                      </View>

                     
                    </TouchableOpacity>

                  )}

                  // data={dummyArray}
                  // keyExtractor={item=>item.key}
                  // renderItem={({item})=>(
                  //   <View> 
                  //     <Text>
                  //       {item.title}
                  //     </Text>
                  //   </View>
                  // )}
                />


            </View>
          );
    }
  
const styles = StyleSheet.create({
  container: {
    flex: 0.80,
    // backgroundColor: 'grey',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
