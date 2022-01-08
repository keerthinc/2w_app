import * as React from 'react';
import { Appbar ,Title} from 'react-native-paper';
import {View,Text} from 'react-native'
import DateTime from './DateTime'

export default Header =()=> {
    

    return (
      <Appbar.Header 
      theme={{
          colors:{
              primary:"#0000",
            }
      
      }}
      style={{flexDirection:"row",justifyContent:"center"}}
      >
       <Title style={{color:"white"}}>
           <DateTime/> 
       </Title>
        
      </Appbar.Header>
    );
 
}