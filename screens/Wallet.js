import React from 'react'
import {View,Text,useWindowDimensions,TouchableOpacity,ImageBackground,Image,TextInput} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {whiteboxcolor,whiteshadeBgcolor,mainBgcolor} from '../utilities/colors'
import SI from 'react-native-vector-icons/SimpleLineIcons'
import FA from 'react-native-vector-icons/FontAwesome'

export const WalletPageHeader = () => {
    const navigation = useNavigation()
  const {height,width} = useWindowDimensions()
return (
  <View style={{ height: height*0.078,backgroundColor:mainBgcolor,paddingHorizontal:18,alignItems:'center',flexDirection:'row',justifyContent:'space-between'}}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
    <SI  name='arrow-left' size={25} color="white"/>
    </TouchableOpacity>
   
  </View>
)
}

const Wallet = () => {
    const {height,width} = useWindowDimensions()
  return (
    <View style={{ flex:1 }}>
        <ImageBackground style={{ backgroundColor:mainBgcolor,height:height*0.15,zIndex:-1 }}>
       
        </ImageBackground>
        <View style={{ height:height*0.23,marginHorizontal:15,top:-60,borderRadius:10,padding:20,zIndex:5,backgroundColor:whiteboxcolor,justifyContent:'space-between' }}>
            <View style={{ flexDirection:'row',justifyContent:'space-between' }}>
                <Text style={{ color:mainBgcolor,fontSize:35,fontWeight:'800' }}><FA name='rupee' size={30} color={mainBgcolor}/>0</Text>
                <View style={{ height:50,width:50 }}>
                <Image source={require('../assets/images/wallet.png')} resizeMode="cover" style={{ width:"80%",height:"80%" }}/>
                </View>
               
            </View>
            <View>
                <TextInput 
                    placeholder='Your Balance'
                    keyboardType='number-pad'
                    style={{ borderBottomWidth:1,borderBottomColor:'grey',height:45,color:'black' }}
                    placeholderTextColor='grey'
                />
            </View>
            <View style={{ flexDirection:'row',justifyContent:'space-between',alignItems:'center',backgroundColor:whiteboxcolor }}>
            <SI name='star' size={15} color={mainBgcolor}/>
                <Text style={{ color:'black',fontWeight:'700' }}>Redeem Voucher</Text>
                <SI name='arrow-right' size={15} color={mainBgcolor}/>
            </View>
        </View>

        <View style={{ flexDirection:'row',justifyContent:'space-between',padding:20 }}>
            <Text style={{ fontSize:20,fontWeight:'800',color:'black' }}>Add money to Zepco Cash</Text>
            <Text style={{ color:'orange',fontWeight:'600',fontSize:14 }}>How It Works</Text>
        </View>
        <View style={{ height:height*0.33,marginHorizontal:20,borderRadius:10,padding:20,backgroundColor:whiteboxcolor,justifyContent:'space-between',borderWidth:1,borderColor:'black' }}>
            <TextInput 
                placeholder='1000'
                keyboardType='numeric'
                style={{ height:50,borderRadius:10,backgroundColor:'#f2f7f0',paddingLeft:8 }}
            />
            <View style={{ flexDirection:'row',justifyContent:'space-between' }}>
                <TouchableOpacity style={{ alignItems:'center',borderRadius:15,paddingVertical:8,paddingHorizontal:14,borderWidth:1,borderColor:mainBgcolor,flexDirection:'row' }}>
                <FA name='rupee' size={15} color="black"/>
                <Text>250</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{alignItems:'center',borderRadius:15, paddingVertical:8,paddingHorizontal:14,borderWidth:1,borderColor:mainBgcolor,flexDirection:'row' }}>
                <FA name='rupee' size={12} color="black"/>
                <Text>500</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ alignItems:'center',borderRadius:15,paddingVertical:8,paddingHorizontal:14,borderWidth:1,borderColor:mainBgcolor,flexDirection:'row' }}>
                <FA name='rupee' size={12} color="black"/>
                <Text>750</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ alignItems:'center',borderRadius:15,paddingVertical:8,paddingHorizontal:14,borderWidth:1,borderColor:mainBgcolor,flexDirection:'row' }}>
                <FA name='rupee' size={12} color="black"/>
                <Text>1000</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={{ paddingVertical:12,width:"100%",backgroundColor:"#f05d3c",borderRadius:10 }}>
                <Text style={{ textAlign:'center',fontSize:18,fontWeight:'700',color:'white' }}>Top Up</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Wallet