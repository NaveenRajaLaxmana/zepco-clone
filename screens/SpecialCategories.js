import React from 'react'
import { View,Text,useWindowDimensions,ImageBackground } from 'react-native'
import {ScrollView} from 'react-native-gesture-handler'
import {whiteboxcolor,whiteshadeBgcolor} from '../utilities/colors'
import {TrendingBox,trendingData} from './HomeScreen'

const SpecialCategories = () => {
    const {height,width} = useWindowDimensions()
  return (
    <View style={{ flex:1 }}>
        <View style={{ height:height*0.28,backgroundColor:'red' }}>
        <ImageBackground source={require('../assets/images/banner-image4.jpg')} resizeMode="cover" style={{ height:"100%",width:"100%" }}>
            <View style={{ paddingLeft:40,paddingTop:50 }}>
                <Text style={{ fontSize:18,color:'white',fontWeight:'900' }}>India #1</Text>
                <Text style={{ fontSize:18,color:'white',fontWeight:'900' }}>Brands,Oils</Text>
                <Text style={{ fontSize:17,color:'white',fontWeight:'400' }}>Upto 12% Off</Text>
            </View>
        </ImageBackground>
        </View>
        <ScrollView style={{ backgroundColor:whiteshadeBgcolor,borderTopLeftRadius:15,borderTopRightRadius:15,zIndex:5,marginTop:-15 }}>
               <View style={{ padding:20,flexWrap:'wrap',flexDirection:'row',justifyContent:'space-between' }}>
                <View style={{ height:height*0.31,marginTop:12 }}>
                    <TrendingBox item={trendingData[0]}/>
                </View>
                <View style={{ height:height*0.31,marginTop:12 }}>
                    <TrendingBox item={trendingData[0]}/>
                </View>
                <View style={{ height:height*0.31,marginTop:12 }}>
                    <TrendingBox item={trendingData[0]}/>
                </View>
                <View style={{ height:height*0.31,marginTop:12 }}>
                    <TrendingBox item={trendingData[0]}/>
                </View>
                <View style={{ height:height*0.31,marginTop:12 }}>
                    <TrendingBox item={trendingData[0]}/>
                </View>
                <View style={{ height:height*0.31,marginTop:12 }}>
                    <TrendingBox item={trendingData[0]}/>
                </View>
                <View style={{ height:height*0.31,marginTop:12 }}>
                    <TrendingBox item={trendingData[0]}/>
                </View>
                <View style={{ height:height*0.31,marginTop:12 }}>
                    <TrendingBox item={trendingData[0]}/>
                </View>
                <View style={{ height:height*0.31,marginTop:12 }}>
                    <TrendingBox item={trendingData[0]}/>
                </View>
                <View style={{ height:height*0.31,marginTop:12 }}>
                    <TrendingBox item={trendingData[0]}/>
                </View>
                <View style={{ height:height*0.31,marginTop:12 }}>
                    <TrendingBox item={trendingData[0]}/>
                </View>
                <View style={{ height:height*0.31,marginTop:12 }}>
                    <TrendingBox item={trendingData[0]}/>
                </View>
                <View style={{ height:height*0.31,marginTop:12 }}>
                    <TrendingBox item={trendingData[0]}/>
                </View>
                <View style={{ height:height*0.31,marginTop:12 }}>
                    <TrendingBox item={trendingData[0]}/>
                </View>
                <View style={{ height:height*0.31,marginTop:12 }}>
                    <TrendingBox item={trendingData[0]}/>
                </View>

               </View>
            
           </ScrollView>
    </View>
  )
}

export default SpecialCategories