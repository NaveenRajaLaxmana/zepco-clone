import React from 'react'
import { View,Text,Image,TouchableOpacity,useWindowDimensions } from 'react-native'
import {ScrollView} from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const SingleItem = ({route,navigation}) => {
    const { height,width } = useWindowDimensions()
    // console.log(route.params.item.item)
    const item =route.params.item.item
  return (
    <ScrollView>
        <View style={{ height:height*0.3,backgroundColor:'white',padding:20 }}>
            <View style={{ height:"80%",width:"80%" }}>
            <Image source={item.image} resizeMode="cover" style={{ height: "100%",width:"100%" }}/>
            </View>
        </View>
        <View style={{ marginTop:10,paddingHorizontal:10 }}>
            <Text>{route.name}</Text>
            <Text>{item.size}</Text>
            <View style={{ flexDirection:'row' }}>
            <Text>{item.prices}</Text>
            <TouchableOpacity style={{ paddingVertical:5,paddingHorizontal:8,backgroundColor:"purple",borderRadius:15 }}>
                <Text style={{ color:"white",fontWeight:"700",fontSize:21 }}>Add</Text>
            </TouchableOpacity>
            </View>
        </View>
    </ScrollView>
  )
}

export default SingleItem