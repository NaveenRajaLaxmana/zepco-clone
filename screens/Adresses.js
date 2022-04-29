import React from 'react'
import {View,Text,Image,TouchableOpacity} from 'react-native'
import {whiteboxcolor,whiteshadeBgcolor} from '../utilities/colors'

const Address = () => {
  return (
    <View style={{ flex:1,backgroundColor:whiteboxcolor,justifyContent:'center',alignItems:'center' }}>
        <Image source={require('../assets/images/icecream.png')} resizeMode="cover" style={{height:80,width:80}}/>
        <Text style={{ fontSize:22,fontWeight:'800',color:'black',textAlign:'center' }}>No Address Added</Text>
        <Text style={{ marginVertical:15,flexWrap:'wrap',color:'black',textAlign:'center' }}>To see the  saved address here,add Your work or home address</Text>
        <TouchableOpacity style={{width:"90%",borderRadius:15,backgroundColor:'red',paddingVertical:15,paddingHorizontal:40 }}>
            <Text style={{ textAlign:'center',color:'white',fontSize:18,fontWeight:'600' }}>Add New Address</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Address