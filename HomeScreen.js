import React from 'react'
import { View,Text,useWindowDimensions,SafeAreaView,Image,TextInput,FlatList,TouchableOpacity,ImageBackground } from 'react-native'
import {ScrollView} from 'react-native-gesture-handler'
import { mainBgcolor,textcolor,whiteboxcolor,whiteshadeBgcolor } from './utilities/colors'
import SA from 'react-native-vector-icons/SimpleLineIcons'
import FA from 'react-native-vector-icons/FontAwesome'
import MA from 'react-native-vector-icons/MaterialIcons'
const menu = require('./assets/images/menu.png')
const wallet = require('./assets/images/wallet.png')
const bannerimages = [
  {
    id:1,
    image: require('./assets/images/banner-image.jpg')
  },
  {
    id:2,
    image: require('./assets/images/banner-image2.jpg')
  },
  {
    id:3,
    image: require('./assets/images/banner-image3.jpg')
  },
  {
    id:4,
    image: require('./assets/images/banner-image4.jpg')
  },
]

const trendingData = [
  {
    id:1,
    image:require('./assets/images/tomato.png'),
    name:"TOMATO LOCAL",
    size:'500g',
    price:'18'
  },
  {
    id:2,
    image:require('./assets/images/onion.png'),
    name:"Onion",
    size:'500g',
    price:'22'
  },
  {
    id:3,
    image:require('./assets/images/tomato.png'),
    name:"Tomato",
    size:'500g',
    price:'18'
  },
  {
    id:4,
    image:require('./assets/images/onion.png'),
    name:"Onion LOCAL",
    size:'500g',
    price:'25'
  }
]

const Header = () => {
  const {height,width} = useWindowDimensions()
 return (
  <View style={{ height: height*0.078,backgroundColor:mainBgcolor,paddingHorizontal:18,alignItems:'center',justifyContent:'space-around',flexDirection:'row'}}>
  <Image source={wallet} resizeMode="cover" style={{ width:25,height:"50%" }}/>
  <View style={{ flexDirection:'row',justifyContent:'center',alignItems:'center' }}>
  <TextInput 
    style={{ width:"70%",height:"50%",backgroundColor:'transparent',color:'white',borderColor:'none' }}
    defaultValue="Kempegowda,Majestic..."
  />
  <SA name='arrow-down' size={10} color="orange"/>
  </View>
  
  <Image source={menu} resizeMode="cover" style={{ width:25,height:"30%",tintColor:'orange' }}/>
</View>
 )
}

const Footer = () => {
  const {height,width} = useWindowDimensions()
  return (
    <View style={{ position:'absolute',bottom:0,left:0,flexDirection:'row',height:height*0.08,width:width,backgroundColor:mainBgcolor }}>
      <View style={{ width:"20%",height:"100%",justifyContent:'center',alignItems:'center' }}>
        <Image source={require('./assets/images/offertag.png')} resizeMode="cover" style={{ width: "60%",height:"60%"}}/>
      </View>
      <View style={{ width:"80%",height:"100%",padding:5 }}>
        <Text style={{ color:'white' }}>Free Delivery</Text>
        <Text style={{ color:'grey' }}>Add Items worth <FA name='rupee' size={15} color="white"/><Text style={{ color:'white' }}>99</Text> to get <Text style={{ color:'white',fontWeight:'400' }}>Free</Text></Text>
      </View>
    </View>
  )
}


const HomeScreen = () => {
    return (
      <SafeAreaView style={{ flex:1 }}>
         <Header />
        <ScrollView style={{ flex:1,backgroundColor:whiteshadeBgcolor }}>
         <BannerPart />
        <SearchBar />
        <Trending />
        <CenterImage />
        <Cetegories />
        <InfocusToday />
        <TopCollections />
        <ItsTimeforLaundary />
        <SavourMoment />
        <SeasonTopPick />
        <CategoriesToExplore />
        <HouseHold />
        <CleanBowled />
        <Curatedforyou />
        <Featured />
        </ScrollView>
        <Footer />
      </SafeAreaView>
    )
  }
  
  const Cetegories = () => {
    const {height,width} = useWindowDimensions()
    return (
      <View style={{ marginLeft:10,}}>
        <Text style={{ fontSize:18,fontWeight:'700',color:'black'  }}>Categories</Text>
        <GenerateBoxes />
      </View>
    )
  }
  const GenerateBoxes = () => {
    const {height,width} = useWindowDimensions()
    return (
      <View style={{ paddingRight:10,marginTop:10 }}>
        <View style={{ marginTop:5,flexDirection:'row',height:height*0.21 }}>
          <CategoryBox item={trendingData[0]}/>
          <CategoryBox item={trendingData[0]}/>
          <CategoryBox item={trendingData[0]}/>
        </View>
        <View style={{ marginTop:5,flexDirection:'row',height:height*0.21 }}>
          <CategoryBox item={trendingData[0]}/>
          <CategoryBox item={trendingData[0]}/>
          <CategoryBox item={trendingData[0]}/>
        </View>
        <View style={{ marginTop:5,flexDirection:'row',height:height*0.21 }}>
          <CategoryBox item={trendingData[0]}/>
          <CategoryBox item={trendingData[0]}/>
          <CategoryBox item={trendingData[0]}/>
        </View>
        <View style={{ marginTop:5,flexDirection:'row',height:height*0.21 }}>
          <CategoryBox item={trendingData[0]}/>
          <CategoryBox item={trendingData[0]}/>
          <CategoryBox item={trendingData[0]}/>
        </View>
      </View>
    )
  }
  const Trending = () => {
    const {height,width} = useWindowDimensions()
    return (
      <View style={{ height:height*0.31,marginTop:12,marginLeft:20 }}>
        <View style={{ flexDirection:'row',justifyContent:'space-between',paddingRight:15 }}>
          <Text style={{ fontSize:18,fontWeight:'700',color:'black' }}>Trending Near You</Text>
          <Text style={{ fontSize:15,fontWeight:'500',color:'purple' }}>See More ></Text>
        </View>
        <FlatList 
        style={{ marginTop:15 }}
          horizontal
          data={trendingData}
          keyExtractor={item =>item.id}
          renderItem={ item => <TrendingBox item={item}/>}
          scrollEnabled={true}
        />
      </View>
    )
  }
  const CenterImage = () => {
    const {height,width} = useWindowDimensions()
    return (
      <View style={{ height:height*0.18,width:width*0.92,borderRadius:10,marginVertical:20,marginHorizontal:20 }}>
       <Image source={bannerimages[0].image} resizeMode="cover" style={{height:'100%',width:"100%",borderRadius:15}}/>
      
      </View>
    )
  }
  const CategoryBox = ({item}) => {
    const {height,width} = useWindowDimensions()
    
    return (
      <View style={{ height:"97%",width:width*0.3,backgroundColor:whiteboxcolor,marginRight:10,borderRadius:10 }}>
        <View style={{ height:"65%",width:"100%",padding:12, }}>
          <Image source={trendingData[0].image} resizeMode="cover" style={{height:"100%",width:"100%"}}/>
        </View>
        <View style={{ height:"40%",width:"100%",padding:8 }}>
          <Text style={{ textTransform:'capitalize',color:textcolor,fontWeight:'500' }}>{trendingData[0].name}</Text>
          
          
        </View>
      </View>
    )
  }
  const TrendingBox = ({item}) => {
    const {height,width} = useWindowDimensions()
   
    return (
      <View style={{ height:"97%",width:width*0.3,backgroundColor:whiteboxcolor,marginRight:15,borderRadius:10 }}>
         <View style={{ position:'absolute',right:0,top:-8, height:45,width:40 }}>
          <ImageBackground source={require('./assets/images/offer.png')} style={{ height:"100%",width:"100%",flexWrap:'wrap',justifyContent:'center',alignItems:'center' }}>
            <View style={{flexWrap:'wrap',alignItems:'center',alignSelf:'center' }}>
            <Text style={{ color:'white',fontSize:13,textAlign:'center' }}>4% </Text>
            <Text style={{ color:'white',fontSize:13,textAlign:'center' }}>off</Text>
            </View>
          </ImageBackground>
        </View>
        <View style={{ height:"55%",width:"100%",padding:12, }}>
          <Image source={trendingData[0].image} resizeMode="cover" style={{height:"100%",width:"100%"}}/>
        </View>
        <View style={{ height:"45%",width:"100%",padding:8 }}>
          <Text style={{ textTransform:'capitalize',color:textcolor,fontWeight:'500' }}>{trendingData[0].name}</Text>
          <Text style={{ marginTop:3,color:'black' }}>{trendingData[0].size}</Text>
          <View style={{ flexDirection:'row',justifyContent:'space-between',paddingBottom:10 }}>
  
            <View style={{ flexDirection:'row',marginTop:5 }}>
            <FA name='rupee' size={15} color="black"/>
            <Text style={{ color:'black' }}>{trendingData[0].price}</Text>
            </View>
          
  
          <TouchableOpacity style={{ padding:12,borderRadius:10,backgroundColor:whiteboxcolor,elevation:2 }}>
            <MA name='add' size={10} color="purple"/>
          </TouchableOpacity>
          </View>
          
        </View>
      </View>
    )
  }
  const BannerPart = () => {
    const {height,width} = useWindowDimensions()
    return (
      <View style={{ marginVertical:20,marginHorizontal:20,height:height*0.18,width:width*0.95 }}>
           
          <FlatList  
            style={{ width:"100%",height:"100%" }}
            horizontal
            data={bannerimages}
            keyExtractor={item =>item.id}
            renderItem={ item => <Banner item={item} width={width*0.90}/>}
            scrollEnabled={true}
            showsHorizontalScrollIndicator={false}
          />
        
         </View>
    )
  }
  const SearchBar = () => {
    const {height,width} = useWindowDimensions()
    return (
      <View style={{ marginVertical:5,marginHorizontal:20,height:60,width:width*0.89,borderRadius:30,paddingLeft:10, backgroundColor:whiteboxcolor,justifyContent:'center',alignItems:'center',flexDirection:'row' }}>
      <FA name='search' size={20} color="black"/>
    <TextInput 
      style={{ width:"90%",height:"100%",color:'black',paddingLeft:15 }}
      placeholder="Search"
    />
   </View>
    )
  }
  const Banner = ({item,width}) => {
   
    return (
      <View style={{ width:width,height:"100%",borderRadius:15,marginRight:15 }}>
       <Image source={bannerimages[0].image} resizeMode="cover" style={{height:'100%',width:width,borderRadius:15}}/>
      
      </View>
    )
  }
  
  const InfocusToday = () => {
    const {height,width} = useWindowDimensions()
    return (
      <View style={{ marginTop:5 }}>
        <Text style={{ fontSize:18,fontWeight:'700',color:'black',marginLeft:20 }}>In Focus Today</Text>
      <View style={{ height:height*0.18,width:width*0.92,borderRadius:10,marginVertical:20,marginHorizontal:20 }}>
       <Image source={bannerimages[0].image} resizeMode="cover" style={{height:'100%',width:"100%",borderRadius:15}}/>
      
      </View>
      <View style={{ height:height*0.18,width:width*0.92,borderRadius:10,marginVertical:20,marginHorizontal:20 }}>
       <Image source={bannerimages[2].image} resizeMode="cover" style={{height:'100%',width:"100%",borderRadius:15}}/>
      
      </View>
      </View>
    )
  }
  
  const TopCollections = () => {
    const {height,width} = useWindowDimensions()
    return (
      <>
      <Text style={{ fontSize:18,fontWeight:'700',color:'black',marginLeft:20 }}>Top Collections</Text>
      <View style={{ marginVertical:20,marginHorizontal:20,height:height*0.18,width:width*0.95 }}>
           
          <FlatList  
            style={{ width:"100%",height:"100%" }}
            horizontal
            data={bannerimages}
            keyExtractor={item =>item.id}
            renderItem={ item => <Banner item={item} width={width*0.90}/>}
            scrollEnabled={true} 
            showsHorizontalScrollIndicator={false}
          />
        
         </View>
         </>
    )
  }
  
  const ItsTimeforLaundary = () => {
    const {height,width} = useWindowDimensions()
    return (
      <View style={{ height:height*0.31,marginTop:12,marginLeft:20 }}>
        <View style={{ flexDirection:'row',justifyContent:'space-between',paddingRight:15 }}>
          <Text style={{ fontSize:18,fontWeight:'700',color:'black' }}>It is Time For Laundary</Text>
          <Text style={{ fontSize:15,fontWeight:'500',color:'purple' }}>See More ></Text>
        </View>
        <FlatList 
        style={{ marginTop:15 }}
          horizontal
          data={trendingData}
          keyExtractor={item =>item.id}
          renderItem={ item => <TrendingBox item={item}/>}
          scrollEnabled={true}
        />
      </View>
    )
  }
  
  const SavourMoment = () => {
    const {height,width} = useWindowDimensions()
    return (
      <View style={{ height:height*0.31,marginTop:12,marginLeft:20 }}>
        <View style={{ flexDirection:'row',justifyContent:'space-between',paddingRight:15 }}>
          <Text style={{ fontSize:18,fontWeight:'700',color:'black' }}>Savour The Moment</Text>
          <Text style={{ fontSize:15,fontWeight:'500',color:'purple' }}>See More ></Text>
        </View>
        <FlatList 
        style={{ marginTop:15 }}
          horizontal
          data={trendingData}
          keyExtractor={item =>item.id}
          renderItem={ item => <TrendingBox item={item}/>}
          scrollEnabled={true}
        />
      </View>
    )
  }
  
  
  const SeasonTopPick = () => {
    const {height,width} = useWindowDimensions()
    return (
      <View style={{ height:height*0.35,marginTop:12,marginLeft:20 }}>
        <View style={{ justifyContent:'space-between',paddingRight:15 }}>
          <Text style={{ fontSize:18,fontWeight:'700',color:'black' }}>Season's Top Picks</Text>
          <Text style={{ fontSize:15,fontWeight:'500',color:'purple' }}>Best Selling products from your favourite brands</Text>
        </View>
        <FlatList 
        style={{ marginTop:15 }}
          horizontal
          data={trendingData}
          keyExtractor={item =>item.id}
          renderItem={ item => <SeasonScroll item={item}/>}
          scrollEnabled={true}
        />
      </View>
    )
  }
  
  const CategoriesToExplore = () => {
    const {height,width} = useWindowDimensions()
    return (
      <View style={{ height:height*0.35,marginTop:12,marginLeft:20 }}>
        <View style={{ justifyContent:'space-between',paddingRight:15 }}>
          <Text style={{ fontSize:18,fontWeight:'700',color:'black' }}>Categories To Explore</Text>
         
        </View>
        <FlatList 
        style={{ marginTop:15 }}
          horizontal
          data={trendingData}
          keyExtractor={item =>item.id}
          renderItem={ item => <SeasonScroll item={item}/>}
          scrollEnabled={true}
        />
      </View>
    )
  }
  
  const SeasonScroll = ({item}) => {
    const {height,width} = useWindowDimensions()
    
    return (
      <View style={{ height:"97%",width:width*0.34,backgroundColor:mainBgcolor,marginRight:10,borderRadius:10 }}>
        <View style={{ height:"65%",width:"100%",padding:12, }}>
          <Image source={trendingData[0].image} resizeMode="cover" style={{height:"100%",width:"100%"}}/>
        </View>
        <View style={{ height:"40%",width:"100%",padding:8 }}>
          <Text style={{ textTransform:'capitalize',color:textcolor,fontWeight:'500' }}>{trendingData[0].name}</Text>
          
          
        </View>
      </View>
    )
  }
  
  const HouseHold = () => {
    const {height,width} = useWindowDimensions()
    return (
      <View style={{ height:height*0.31,marginTop:12,marginLeft:20 }}>
        <View style={{ flexDirection:'row',justifyContent:'space-between',paddingRight:15 }}>
          <Text style={{ fontSize:18,fontWeight:'700',color:'black' }}>HouseHold Favourites</Text>
          <Text style={{ fontSize:15,fontWeight:'500',color:'purple' }}>See More ></Text>
        </View>
        <FlatList 
        style={{ marginTop:15 }}
          horizontal
          data={trendingData}
          keyExtractor={item =>item.id}
          renderItem={ item => <TrendingBox item={item}/>}
          scrollEnabled={true}
        />
      </View>
    )
  }
  
  const CleanBowled = () => {
    const {height,width} = useWindowDimensions()
    return (
      <View style={{ height:height*0.31,marginTop:12,marginLeft:20 }}>
        <View style={{ flexDirection:'row',justifyContent:'space-between',paddingRight:15 }}>
          <Text style={{ fontSize:18,fontWeight:'700',color:'black' }}>Clean Bowled</Text>
          <Text style={{ fontSize:15,fontWeight:'500',color:'purple' }}>See More ></Text>
        </View>
        <FlatList 
        style={{ marginTop:15 }}
          horizontal
          data={trendingData}
          keyExtractor={item =>item.id}
          renderItem={ item => <TrendingBox item={item}/>}
          scrollEnabled={true}
        />
      </View>
    )
  }
  
  const Curatedforyou = () => {
    const {height,width} = useWindowDimensions()
    return (
      <View style={{ marginLeft:10,}}>
        <Text style={{ fontSize:18,fontWeight:'700',color:'black'  }}>Curated For You</Text>
        <Text style={{ fontSize:18,fontWeight:'700',color:'black'  }}>All your favourites</Text>
        <GenerateBoxes />
      </View>
    )
  }
  
  const Featured = () => {
    const {height,width} = useWindowDimensions()
    return (
      <View style={{ height:height*0.58,width:width*0.92,borderRadius:10,marginVertical:20,marginHorizontal:20 }}>
        <Text style={{ fontSize:21,fontWeight:'700',color:'black',marginBottom:10 }}>Featured</Text>
       <Image source={bannerimages[0].image} resizeMode="cover" style={{height:'100%',width:"100%",borderRadius:15}}/>
      
      </View>
    )
  }

  export default HomeScreen