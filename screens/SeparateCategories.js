import React from 'react'
import { View,Text,useWindowDimensions,Image,TouchableOpacity,FlatList } from 'react-native'
import {ScrollView} from 'react-native-gesture-handler'
import {whiteboxcolor,whiteshadeBgcolor} from '../utilities/colors'
import {TrendingBox,trendingData} from './HomeScreen'


 

const SeparateCategories = () => {
    const {height,width} = useWindowDimensions()
  return (
    <View style={{ flexDirection:'row',flex:1,backgroundColor:whiteshadeBgcolor }}>
        <View style={{ width:width*0.20,backgroundColor:whiteboxcolor,elevation:10 }}>
        <ScrollView style={{ flexDirection:'column',left:0 }}>
            <TouchableOpacity style={{ height:70,width:70,justifyContent:'space-between',marginTop:10,alignItems:'center' }}>
                <Image source={require('../assets/images/vegetable/v1.png')} resizeMode="cover" style={{ height:"80%",width:"80%" }}/>
                <Text style={{ flexWrap:'wrap',fontSize:12,textAlign:'center' }}>All</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ height:70,width:70,justifyContent:'space-between',marginTop:20,alignItems:'center' }}>
                <Image source={require('../assets/images/vegetable/v2.png')} resizeMode="cover" style={{ height:"80%",width:"80%" }}/>
                <Text style={{ flexWrap:'wrap',fontSize:12,textAlign:'center' }}>Summer Fruits</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ height:70,width:70,justifyContent:'space-between',marginTop:20,alignItems:'center' }}>
                <Image source={require('../assets/images/vegetable/v3.png')} resizeMode="cover" style={{ height:"80%",width:"80%" }}/>
                <Text style={{ flexWrap:'wrap',fontSize:12,textAlign:'center' }}>Fresh Fruits</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ height:70,width:70,justifyContent:'space-between',marginTop:20,alignItems:'center' }}>
                <Image source={require('../assets/images/vegetable/v4.png')} resizeMode="cover" style={{ height:"80%",width:"80%" }}/>
                <Text style={{ flexWrap:'wrap',fontSize:12,textAlign:'center' }}>Fresh Vegetables</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ height:70,width:70,justifyContent:'space-between',marginTop:20,alignItems:'center' }}>
                <Image source={require('../assets/images/vegetable/v5.png')} resizeMode="cover" style={{ height:"80%",width:"80%" }}/>
                <Text style={{ flexWrap:'wrap',fontSize:12,textAlign:'center' }}>Leafy,Herby & Seasoning</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ height:70,width:70,justifyContent:'space-between',marginTop:20,alignItems:'center' }}>
                <Image source={require('../assets/images/vegetable/v6.png')} resizeMode="cover" style={{ height:"80%",width:"80%" }}/>
                <Text style={{ flexWrap:'wrap',fontSize:12,textAlign:'center' }}>Cuts & Sprouts</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ height:70,width:70,justifyContent:'space-between',marginTop:20,alignItems:'center' }}>
                <Image source={require('../assets/images/vegetable/v7.png')} resizeMode="cover" style={{ height:"80%",width:"80%" }}/>
                <Text style={{ flexWrap:'wrap',fontSize:12,textAlign:'center' }}>Exotic Fruits & Veggies</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ height:70,width:70,justifyContent:'space-between',marginTop:20,alignItems:'center' }}>
                <Image source={require('../assets/images/vegetable/v1.png')} resizeMode="cover" style={{ height:"80%",width:"80%" }}/>
                <Text style={{ flexWrap:'wrap',fontSize:12,textAlign:'center' }}>Organic & Residue Free</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ height:70,width:70,justifyContent:'space-between',marginTop:20,alignItems:'center' }}>
                <Image source={require('../assets/images/vegetable/v2.png')} resizeMode="cover" style={{ height:"80%",width:"80%" }}/>
                <Text style={{ flexWrap:'wrap',fontSize:12,textAlign:'center' }}>Gardening</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ height:70,width:70,justifyContent:'space-between',marginTop:20,alignItems:'center' }}>
                <Image source={require('../assets/images/vegetable/v3.png')} resizeMode="cover" style={{ height:"80%",width:"80%" }}/>
                <Text style={{ flexWrap:'wrap',fontSize:12,textAlign:'center' }}>Dried & Dehydration</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ height:70,width:70,justifyContent:'space-between',marginTop:20,alignItems:'center' }}>
                <Image source={require('../assets/images/vegetable/v4.png')} resizeMode="cover" style={{ height:"80%",width:"80%" }}/>
                <Text style={{ flexWrap:'wrap',fontSize:12 }}>Leaves & Flowers</Text>
            </TouchableOpacity>
        </ScrollView>
        </View>
       
           <ScrollView>
               <View style={{ padding:20,flexWrap:'wrap',flexDirection:'row' }}>
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

export default SeparateCategories