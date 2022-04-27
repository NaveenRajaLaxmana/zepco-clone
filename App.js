import React from 'react'
import { View,Text,useWindowDimensions,SafeAreaView,Image,TouchableOpacity} from 'react-native'
import {ScrollView} from 'react-native-gesture-handler'
import HomeScreen from './screens/HomeScreen'
import { NavigationContainer,useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MI from 'react-native-vector-icons/MaterialIcons'
import FA from 'react-native-vector-icons/FontAwesome'
import SI from 'react-native-vector-icons/SimpleLineIcons'
import AD from 'react-native-vector-icons/AntDesign'
import { mainBgcolor,textcolor,whiteboxcolor,whiteshadeBgcolor } from './utilities/colors'
import Orders from './screens/orders'
import SingleItem from './screens/SingleItem'
import SearchPage, { SeacrhPageHeader } from './screens/SearchPage'

const Stack = createNativeStackNavigator()
const wallet = require('./assets/images/wallet.png')


const Header = ({name}) =>{
  const navigation = useNavigation()
  const {height,width} = useWindowDimensions()
return (
  <View style={{ height: height*0.078,backgroundColor:mainBgcolor,paddingHorizontal:18,alignItems:'center',flexDirection:'row'}}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
    <MI  name='arrow-back' size={25} color="orange"/>
    </TouchableOpacity>
    <Text style={{ paddingLeft:10,color:'white',textTransform:'capitalize',fontWeight:'700',fontSize:19 }}>{name}</Text>
  </View>
)
}

const Settings = () => {
  const {height,width} = useWindowDimensions()
  const navigation = useNavigation()
  return (
    <SafeAreaView style={{ flex:1 }}>
    <ScrollView style={{ flex:1 }}>
      <View style={{ height:height*0.4,margin:20,padding:10,borderRadius:15,backgroundColor:mainBgcolor,width:width*0.9 }}>
      <View style={{ flexDirection:'row',justifyContent:'space-between',flex:1 }}>
        <View style={{ width:"50%",height:"100%",alignItems:'flex-start',justifyContent:'center' }}>
        <Image source={require('./assets/images/giftbox.png')} resizeMode="cover" style={{ height:"80%",width:"80%" }}/>
        </View>
          <View style={{ width:"50%",height:"100%",alignItems:'flex-start',justifyContent:'center' }}>
            <Text style={{ textTransform:'capitalize',color:'white',fontWeight:'700',fontSize:19 }}>Refer a friend!</Text>
            <Text style={{ flexWrap:'wrap',color:'white',textAlign:'left' }}>Refer Zepto to a friend and gets 25% off on your next order!</Text>
          </View>
      </View>
      <View style={{ flex:1 }}>
        <Text style={{ textTransform:'capitalize',fontWeight:'700',fontSize:17,color:'white',paddingLeft:10 }}>Share your code</Text>
        <View style={{ flexDirection:'row',alignItems:'center',justifyContent:'space-around' }}>
        <View style={{ width:"45%",height:"70%",marginVertical:15,backgroundColor:'white',justifyContent:'center',alignItems:'center' }}>
          <Text style={{ color:'black',fontWeight:'800',fontSize:23 }}>ABCD12</Text>
        </View>
        <View style={{ height:50,width:50,backgroundColor:'green',justifyContent:'center',alignItems:'center',borderRadius:50 }}>
          <FA name='whatsapp' size={25} color="white"/>
        </View>
        <View style={{ height:50,width:50,backgroundColor:'white',justifyContent:'center',alignItems:'center',borderRadius:50 }}>
          <FA name='upload' size={25} color="black"/>
        </View>
        </View>
      </View>
      </View>

      
      <View style={{ height:height*0.15,backgroundColor:'#96e68c' }}>
        <View style={{ flexDirection:'row',justifyContent:'space-around',flex:1,alignItems:'center' }}>
          
          <Image source={wallet} resizeMode="cover" style={{ height:"80%",width:50 }} />
         
         <Text style={{ marginLeft:5,fontWeight:'500',fontSize:19 }}>Zepto Cash</Text>
          <SI name='arrow-right' size={15} color="black"/>
        </View>

        <View style={{ flexDirection:'row',justifyContent:'space-around',flex:1,alignItems:'center' }}>
          <Text>Top Your Wallet</Text>
          <TouchableOpacity style={{ borderRadius:10,padding:5,borderColor:'grren',borderWidth:1 }}>
            <Text style={{ color:'green' }}>Add Cash</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <TouchableOpacity onPress={() => navigation.navigate('orders')} style={{ flexDirection:'row',justifyContent:'space-between',padding:10,margin:10 }}>
        <View style={{ flexDirection:'row' }}>
          <SI name='handbag' size={20} color={textcolor}/>
          <Text style={{ color:'black' }}> Orders </Text>
        </View>

        <SI name='arrow-right' size={15} color="black"/>
        </TouchableOpacity>

        <TouchableOpacity style={{ flexDirection:'row',justifyContent:'space-between',padding:10,margin:10 }}>
        <View style={{ flexDirection:'row' }}>
          <SI name='heart' size={20} color={textcolor}/>
          <Text style={{ color:'black' }}> Manage Referrals </Text>
        </View>

        <SI name='arrow-right' size={15} color="black"/>
        </TouchableOpacity>

        <TouchableOpacity style={{ flexDirection:'row',justifyContent:'space-between',padding:10,margin:10 }}>
        <View style={{ flexDirection:'row' }}>
          <AD name='customerservice' size={20} color={textcolor}/>
          <Text style={{ color:'black' }}> Customer Support </Text>
        </View>

        <SI name='arrow-right' size={15} color="black"/>
        </TouchableOpacity>

        <TouchableOpacity style={{ flexDirection:'row',justifyContent:'space-between',padding:10,margin:10 }}>
        <View style={{ flexDirection:'row' }}>
          <SI name='location-pin' size={20} color={textcolor}/>
          <Text style={{ color:'black' }}> Address </Text>
        </View>

        <SI name='arrow-right' size={15} color="black"/>
        </TouchableOpacity>

        <TouchableOpacity style={{ flexDirection:'row',justifyContent:'space-between',padding:10,margin:10 }}>
        <View style={{ flexDirection:'row' }}>
          <SI name='reload' size={20} color={textcolor}/>
          <Text style={{ color:'black' }}> Refunds </Text>
        </View>

        <SI name='arrow-right' size={15} color="black"/>
        </TouchableOpacity>

        <TouchableOpacity style={{ flexDirection:'row',justifyContent:'space-between',padding:10,margin:10 }}>
        <View style={{ flexDirection:'row' }}>
          <SI name='user' size={20} color={textcolor}/>
          <Text style={{ color:'black' }}>Profile </Text>
        </View>

        <SI name='arrow-right' size={15} color="black"/>
        </TouchableOpacity>

        <TouchableOpacity style={{ flexDirection:'row',justifyContent:'space-between',padding:10,margin:10 }}>
        <View style={{ flexDirection:'row' }}>
          <MI name='fiber-new' size={20} color={textcolor}/>
          <Text style={{ color:'black' }}> Suggest Products </Text>
        </View>

        <SI name='arrow-right' size={15} color="black"/>
        </TouchableOpacity>

        <TouchableOpacity style={{ flexDirection:'row',justifyContent:'space-between',padding:10,margin:10 }}>
        <View style={{ flexDirection:'row' }}>
          <SI name='info' size={20} color={textcolor}/>
          <Text style={{ color:'black' }}> General Info </Text>
        </View>

        <SI name='arrow-right' size={15} color="black"/>
        </TouchableOpacity>

        <TouchableOpacity style={{ flexDirection:'row',justifyContent:'space-between',padding:10,margin:10 }}>
        <View style={{ flexDirection:'row' }}>
          <MI name='notifications-none' size={20} color={textcolor}/>
          <Text style={{ color:'black' }}> Notifications </Text>
        </View>

        <SI name='arrow-right' size={15} color="black"/>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={{ borderRadius:10,padding:5,borderColor:'grren',borderWidth:1,alignSelf:'center',marginBottom:50 }}>
            <Text style={{ color:'red' }}>Log Out</Text>
          </TouchableOpacity>
    </ScrollView>
    </SafeAreaView>
  )
}

const App = () => {
  const {height,width} = useWindowDimensions()
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='home'>
        <Stack.Screen name='home' component={HomeScreen} options={{
          headerShown:false
        }}/>
        <Stack.Screen name='settings' component={Settings} options={{
          header:({route}) => <Header name={route.name}/>
        }}/>
        <Stack.Screen 
          name='orders'
          component={Orders}
          options={{
            header:({route}) => <Header name={route.name}/>
          }}
        />
        <Stack.Screen 
        name='singleItem'
        component={SingleItem}
        options={{
          header:({route}) => <Header name={route.name}/>
        }}
        />
        <Stack.Screen 
        name='searchpage'
        component={SearchPage}
        options={{
          header:({route}) => <SeacrhPageHeader />
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}



export default App;