import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, ScrollView } from 'react-native';

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
<View style={{backgroundColor: "white",borderRadius: 20,padding: 15,borderColor: '#ccc',borderWidth: 1, alignSelf:'flex-start',}}>
 
    <Text style={{fontSize: 15,fontWeight:700, }}>Princewill Iroka </Text>        
    </View> 
    <Text style ={{fontSize: 13, fontWeight: 600, marginTop:10 , alignSelf:'flex-start',paddingLeft:20}}>Birthday</Text>

    <View style={{backgroundColor: "white",borderRadius: 20,borderColor: '#ccc',borderWidth: 1,alignSelf:'flex-start'}}>
 <View style ={{flexDirection: 'row', alignItems: 'center', padding: 10,justifyContent : 'center'}}>
 <Image source={require('./../assets/Icon1.png')}/>
    <Text style={{fontSize: 15,fontWeight:700}}>06/07/1990</Text>
    </View>           
    </View>  
    <Text style ={{fontSize: 13, fontWeight: 600, marginTop:10 , alignSelf:'flex-start',paddingLeft:20}}>Biological Sex</Text>
    <View style={{backgroundColor: "white",borderRadius: 20,borderColor: '#ccc',borderWidth: 1,alignSelf:'flex-start'}}>
 <View style ={{ flexDirection: 'row',alignItems: 'center',padding: 10,gap: '2', justifyContent: 'space-between'}}>
 
    <Text style={{fontSize: 15,fontWeight:700}}>Male</Text>
    <Image source={require('./../assets/R.Icon.png')}/>
    </View>           
    </View>  
    <Text style ={{fontSize: 13, fontWeight: 600, marginTop:10 , alignSelf:'flex-start',paddingLeft:20}}>Language</Text>
    <View style={{backgroundColor: "white",borderRadius: 20,borderColor: '#ccc',borderWidth: 1,alignSelf:'flex-start'}}>
 <View style ={{ flexDirection: 'row',alignItems: 'center',padding: 10,gap: '2', justifyContent: 'space-between'}}>
 
 <Image source={require('./../assets/btn.png')}/>
    <Image source={require('./../assets/Tag.png')}/>
    </View>           
    </View>  

  


 </View>

 
 

  );


};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  textContainer: {
    alignSelf: 'flex-start', 
    margin:10
  },
});
