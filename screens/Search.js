import React,{useState} from 'react';
import { TextInput,Button,Card, Searchbar} from 'react-native-paper';
import {View,Text,FlatList} from 'react-native'
import Header from './Header'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';


export default Search =({navigation})=> {
    const [city,setCity] = useState('')
    const [cities,setCities] = useState([])
    const fetchCities = (text)=>{
        setCity(text)
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+text+"&APPID=13735671f9269ed216328dea9e258ec4&units=metric")
        .then(item=>item.json())
        .then(cityData=>{
           setCities(cityData.current)
           console.log(cityData)
        })
    }
    const btnClick = async ()=>{
        await AsyncStorage.setItem("newcity",city)
        navigation.navigate("home",{city:city})
        TextInput.value([])
    }

    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);
    return (
     <View style={{flex: 1}}>
         <View style={{flexDirection: 'row', width: '100%'}}>
             
          <TextInput
           label="Enter city name"
           value={city}
           color='rgba(0, 0, 0, 0.75)'
           onChangeText={(text)=>fetchCities(text)}
           style={{width: '100%'}}
          />

          
          </View>
          <Button
           icon="content-save"
           mode="contained" 
           color='rgba(0, 0, 0, 0.75)'
           style={{marginTop: 20, marginLeft:90, width:"50%", flexDirection:"row",justifyContent:"center"}}
           onPress={() => btnClick()}>
          <Text style={{color:"white"}}>save changes</Text> 

        </Button>
     </View>
    );
 
}