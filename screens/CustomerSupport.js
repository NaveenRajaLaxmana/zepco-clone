import React from 'react'
import {View,Text,TouchableOpacity} from 'react-native'
import {whiteboxcolor,whiteshadeBgcolor,textcolor} from '../utilities/colors'
import FI from 'react-native-vector-icons/Feather'
import SI from 'react-native-vector-icons/SimpleLineIcons'
import MI from 'react-native-vector-icons/MaterialIcons'

const CustomerSupport = () => {
  return (
    <View style={{ flex:1 }}>
        <Text style={{ marginVertical:20,marginHorizontal:15,color:'black',fontSize:21,fontWeight:'700' }}>Contact Us</Text>
        <View style={{ backgroundColor:whiteboxcolor,elevation:5 }}>
            <TouchableOpacity style={{ flexDirection:'row',paddingHorizontal:20,paddingVertical:10,justifyContent:'space-between',alignItems:'center' }}>
                <FI name='phone-call' size={25} color={textcolor} style={{ marginRight:12 }}/>
                <View>
                    <Text style={{ color:textcolor,fontSize:22,fontWeight:'600' }}>Phone</Text>
                    <Text style={{ color:textcolor,fontSize:18,marginTop:5 }}>Call customer support now</Text>
                </View>
                <SI name='arrow-right' size={18} color={textcolor}/>
            </TouchableOpacity>

            <TouchableOpacity style={{ flexDirection:'row',paddingHorizontal:20,paddingVertical:10,justifyContent:'space-between',alignItems:'center' }}>
                <MI name='chat' size={25} color={textcolor} style={{ marginRight:12 }}/>
                <View>
                    <Text style={{ color:textcolor,fontSize:22,fontWeight:'600' }}>Chat</Text>
                    <Text style={{ color:textcolor,fontSize:14,marginTop:5,flexWrap:'wrap' }}>Chat with a support representative</Text>
                </View>
                <SI name='arrow-right' size={18} color={textcolor}/>
            </TouchableOpacity>

            <TouchableOpacity style={{ flexDirection:'row',paddingHorizontal:20,paddingVertical:10,justifyContent:'space-between',alignItems:'center' }}>
                <MI name='mail-outline' size={25} color={textcolor} style={{ marginRight:12 }}/>
                <View>
                    <Text style={{ color:textcolor,fontSize:22,fontWeight:'600' }}>Email</Text>
                    <Text style={{ color:textcolor,fontSize:18,marginTop:5 }}>support@zepconow.com</Text>
                </View>
                <SI name='arrow-right' size={18} color={textcolor}/>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default CustomerSupport