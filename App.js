import React from 'react'
import { View,Text,useWindowDimensions,SafeAreaView,ScrollView} from 'react-native'
import HomeScreen from './HomeScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const About = () => {
  console.log('hello')
  return (
    <SafeAreaView style={{ flex:1 }}>
    <View style={{ flex:1,justifyContent:'center',alignItems:'center' }}>
      <Text style={{ color:'black' }}>About</Text>
    </View>
    </SafeAreaView>
  )
}

const App = () => {
  const {height,width} = useWindowDimensions()
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='home'>
        <Stack.Screen name='home' component={HomeScreen}/>
        <Stack.Screen name='about' component={About}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}



export default App;