import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function basicinformation() {

   
    const handleNavigation = () => {



    }


  return (
    
    <View style={styles.container}>
      <View style ={{  position: 'absolute',
    top: 20,
    left: 10,
    backgroundColor: 'white',
    padding: 10,
    
    
  }}>
       <Image source={require('./../assets/L.Icon.png')}
       />
      <View style={styles.textContainer}>
      <Text style ={{fontSize: 24, fontWeight: 700, marginTop:10}}>basic information</Text>
      <Text style ={{fontSize: 11, fontWeight: 400, marginTop:10}}>Last updated: 01:29 PM Jan 04, 2020</Text>
      </View>

    </View>
    <View style={{backgroundColor: "white", marginBottom:40}}>
 <View style ={{flexDirection: 'row', alignItems: 'center', padding: 10,justifyContent : 'center'}}>
 <Image source={require('./../assets/ic.png')}/>
    <Text style={{fontSize: 15,fontWeight:700}}>Share Basic Information</Text>
    </View>           
    </View> 
    
    <Image source={require('./../assets/Avatar 2.png')}
                style={styles.image1} />

<Text style ={{fontSize: 13, fontWeight: 600, marginTop:10 , alignSelf:'flex-start',paddingLeft:20}}>Full Name</Text>

 </View>




  );


};

const styles = StyleSheet.create({
  container: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  textContainer: {
    alignSelf: 'flex-start', 
    margin:10
  },
});
