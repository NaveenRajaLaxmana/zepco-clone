import React,{useState} from 'react'
import { View,Text,Image,TouchableOpacity,useWindowDimensions } from 'react-native'
import {ScrollView} from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import FA from 'react-native-vector-icons/FontAwesome'
import SI from 'react-native-vector-icons/SimpleLineIcons'
import EN from 'react-native-vector-icons/Entypo'
import {Trending,TrendingBox,trendingData} from './HomeScreen'

const SingleItem = ({route,navigation}) => {
    const { height,width } = useWindowDimensions()
    const [showproduct,setShowproduct] = useState(false)
    
    const item =route.params.item.item
  return (
    <ScrollView>
        <View style={{ height:height*0.35,backgroundColor:'white',padding:10 }}>
            <View style={{ height:"100%",width:"100%" }}>
            <Image source={item.image} resizeMode="cover" style={{ height: "90%",width:"90%" }}/>
            </View>
        </View>
        <View style={{ marginTop:10,paddingHorizontal:10 }}>
            <Text style={{ color:'black',fontWeight:'700',fontSize:21 }}>{route.name}</Text>
            <Text style={{ color:'grey',fontSize:17 }}>{item.size}</Text>
            <View style={{ flexDirection:'row',justifyContent:'space-between' }}>
            <Text style={{ color:'black',fontSize:21,fontWeight:'500' }}><FA name='rupee' size={15} color="black"/>{item.price}</Text>
            <TouchableOpacity style={{ paddingVertical:5,paddingHorizontal:25,backgroundColor:"purple",borderRadius:10 }}>
                <Text style={{ color:"white",fontWeight:"500",fontSize:18 }}>Add</Text>
            </TouchableOpacity>
            </View>
        </View>
        <View style={{ padding:15 }}>
           <View style={{ flexDirection:'row',justifyContent:'space-between',alignItems:'center' }}>
               <Text style={{ color:'black',fontWeight:'600',fontSize:20 }}>About Product</Text>
               <TouchableOpacity onPress={() => setShowproduct(!showproduct)}>
               {!showproduct && <SI name='arrow-down' size={15} color="black"/>}
               {showproduct && <SI name='arrow-up' size={15} color="black"/>}
               </TouchableOpacity>
                
           </View>
          {showproduct &&  <View style={{ paddingTop:15 }}>
               <View style={{ flexDirection:'row' }}>
                   <EN name='dot-single' size={15} color="black"/>
                <Text style={{ flexWrap:'wrap',textAlign:'left' }}>Description : Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Text>
               </View>
               <View style={{ flexDirection:'row' }}>
               <EN name='dot-single' size={15} color="black"/>
               <Text style={{ flexWrap:'wrap' }}>Country of Origin : India</Text>
               </View>
               <View style={{ flexDirection:'row' }}>
               <EN name='dot-single' size={15} color="black"/>
               <Text style={{ flexWrap:'wrap' }}>Shelf Life : India</Text>
               </View>
           </View>}
        </View>
        <Trending />
    </ScrollView> 
  )
}

export default SingleItem