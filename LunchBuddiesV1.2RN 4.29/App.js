import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'
import { StyleSheet, Text, View, ImageBackground, Button } from 'react-native';
import BackgroundImage from './Components/BackgroundImage';


import Position from 'react-native/Libraries/Components/Touchable/Position';

export default function App() {
    return (
    <View style={styles.container}>


      <BackgroundImage 
        name={"Lunch Buddies"} 
        loginImage={require('./assets/Images/Fork.jpg')}
        image={require('./assets/Images/people.jpg')} 
        
        
      />
      
     
      
      
      
      
      <StatusBar style="auto" />
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  mainImage:{
    width: '100%',
    height: '200%',
    alignItems: 'center',
    

  
  },
  titles: {
    marginTop: '157%',
    width: '100%',
    alignItems: 'center',
    

  },
  title: {
    
    fontSize: 48,
    fontWeight: '500',
    width: '84%',
    alignItems: 'center',
    

  },
  buttons: {
    marginTop: '0%',
    width: '100%',
    alignItems: 'center',

  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    position: 'absolute',
  }


});

