import React from 'react'
import { View,Text,TouchableOpacity } from 'react-native'
import { mainBgcolor,textcolor,whiteboxcolor,whiteshadeBgcolor } from '../utilities/colors'

const Orders = () => {
  return (
    <View style={{ backgroundColor:whiteshadeBgcolor,flex:1,justifyContent:'center',alignItems:'center' }}>
        <Text>No orders Yet</Text>
        <TouchableOpacity style={{ padding:15,borderColor:'violet',borderWidth:2,borderRadius:15,marginTop:15 }}>
            <Text style={{ fontWeight:'700',color:textcolor }}>Browse Products</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Orders