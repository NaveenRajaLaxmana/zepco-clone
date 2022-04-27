import React from 'react'
import {View,Text,TextInput,useWindowDimensions,TouchableOpacity,Image} from 'react-native'
import MI from 'react-native-vector-icons/MaterialIcons'
import SI from 'react-native-vector-icons/SimpleLineIcons'
import {whiteshadeBgcolor,mainBgcolor,whiteboxcolor} from '../utilities/colors'
import {useNavigation} from '@react-navigation/native'
import {ScrollView} from 'react-native-gesture-handler'
import {Trending,TrendingBox,trendingData} from './HomeScreen'


export const SeacrhPageHeader = () => {
    const navigation = useNavigation()
  const {height,width} = useWindowDimensions()
return (
  <View style={{ height: height*0.078,backgroundColor:whiteboxcolor,paddingHorizontal:18,alignItems:'center',flexDirection:'row',justifyContent:'space-between'}}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
    <SI  name='arrow-left' size={25} color="black"/>
    </TouchableOpacity>
    <View style={{ flexDirection:'row',padding:5,backgroundColor:whiteshadeBgcolor,alignItems:'center',borderRadius:10 }}>
        <MI name='search' size={18} color="grey"/>
        <TextInput 
        keyboardType="default"
        placeholder='Search for products'
        style={{ height:35,width:"80%",backgroundColor:whiteshadeBgcolor }}
        />
    </View>
  </View>
)
}

const SearchPage = () => {
  return (
    <ScrollView style={{ flex:1 }}>
       <Trending />
       <PopularCategories />
    </ScrollView>
  )
}

const PopularCategories = () => {
    return (
        <View style={{ padding:10 }}>
            <Text style={{ marginVertical:10 }}>Popular Categories</Text>
            <View style={{ flexDirection:'row',flexWrap:'wrap',justifyContent:'space-between' }}>
                <TouchableOpacity style={{ height: 95,width:95 }}>
                    <View style={{ backgroundColor:'grey',height:70,width:70,borderRadius:50,alignSelf:'center' }}>
                        <Image source={require('../assets/images/vegetable.png')} resizeMode="cover" style={{ height: "100%",width:"100%" }}/>
                    </View>
                    <Text style={{ flexWrap:'wrap',alignSelf:'center',textAlign:'center' }}>Fresh Vegetable</Text>
                </TouchableOpacity>


                <TouchableOpacity style={{ height: 95,width:95,marginBottom:40 }}>
                    <View style={{ backgroundColor:'grey',height:70,width:70,borderRadius:50,alignSelf:'center' }}>
                        <Image source={require('../assets/images/icecream.png')} resizeMode="cover" style={{ height: "100%",width:"100%" }}/>
                    </View>
                    <Text style={{ flexWrap:'wrap',alignSelf:'center',textAlign:'center' }}>Ice Creams</Text>
                </TouchableOpacity>


                <TouchableOpacity style={{ height: 95,width:95 }}>
                    <View style={{ backgroundColor:'grey',height:70,width:70,borderRadius:50,alignSelf:'center' }}>
                        <Image source={require('../assets/images/softdrink.png')} resizeMode="cover" style={{ height: "100%",width:"100%" }}/>
                    </View>
                    <Text style={{ flexWrap:'wrap',alignSelf:'center',textAlign:'center' }}>Soft Drinks</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ height: 95,width:95 }}>
                    <View style={{ backgroundColor:'grey',height:70,width:70,borderRadius:50,alignSelf:'center' }}>
                        <Image source={require('../assets/images/chips.png')} resizeMode="cover" style={{ height: "100%",width:"100%" }}/>
                    </View>
                    <Text style={{ flexWrap:'wrap',alignSelf:'center',textAlign:'center' }}>Chips & Nachos</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ height: 95,width:95 }}>
                    <View style={{ backgroundColor:'grey',height:70,width:70,borderRadius:50,alignSelf:'center' }}>
                        <Image source={require('../assets/images/dryfruit.png')} resizeMode="cover" style={{ height: "100%",width:"100%" }}/>
                    </View>
                    <Text style={{ flexWrap:'wrap',alignSelf:'center',textAlign:'center' }}>Dry Fruits & Seeds</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ height: 95,width:95 }}>
                    <View style={{ backgroundColor:'grey',height:70,width:70,borderRadius:50,alignSelf:'center' }}>
                        <Image source={require('../assets/images/freshfruit.png')} resizeMode="cover" style={{ height: "100%",width:"100%" }}/>
                    </View>
                    <Text style={{ flexWrap:'wrap',alignSelf:'center',textAlign:'center' }}>Fresh Fruits</Text>
                </TouchableOpacity>
                
            </View>
            
        </View>
    )
}

export default SearchPage