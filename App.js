import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Button, 
  ScrollView, 
  ImageBackground,
  image,
  useWindowDimensions,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Search from './screens/Search'
import Home from './screens/Home'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { SafeAreaView } from 'react-native-safe-area-context';

// const{width:windowWidth, height:windowHeight}= useWindowDimensions()
//const Tab = createBottomTabNavigator()
const img = require('./assets/cloudy.jpeg')
const App= () => {
  return (
    <>
     
     <NavigationContainer>
     <View style={styles.container}>
     <ImageBackground source={img} style={styles.image} >
     <Header/>
      <ScrollView>
       <Search />
       <Home route={{params:{name:"loading !!",
        temp:"loading",
        humidity:"loading",
        desc:"loading",
        icon:"loading",
        city: "loading" }}} />
      </ScrollView></ImageBackground>
     </View>

     </NavigationContainer>
   </>
  );
};


export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image:{
    flex:1, 
    resizeMode:"cover", 
    justifyContent:"center"
  }
});
