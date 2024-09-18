import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView,Image } from 'react-native';

const Livechat1Screen = ({ onBackPress }) => {
  return (
    <View style={styles.container}>


      {/* Navigation Bar */}
      <View style={styles.navBar}>
        <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
          <Image source={require('./../../assets/exit.png')} style={styles.icon} />
        </TouchableOpacity>
        <View style={styles.actions}>
         <Text  style={{fontSize : 30, textAlign: 'center', justifyContent: 'center'}}>New Reminder</Text>
        
        </View>
      </View>

      <ScrollView style={styles.conversationContainer}>
      <View style={styles.card}>
        <View style={styles.doctorMessage}>
        <Image source={require('./../../assets/icon5.png')} />
        <Text style={{fontSize: 15, fontWeight: 700, width: 231, height:16}}>      Who take it?</Text>
        </View>
       
        <View style={styles.doctorMessage}>
   <TouchableOpacity>
        <Image source={require('./../../assets/bg2.png')} />
        </TouchableOpacity>
        <TouchableOpacity>
        <Image source={require('./../../assets/bg1.png')} />
        </TouchableOpacity>
        <TouchableOpacity>
        <Image source={require('./../../assets/bg3.png')} />
        </TouchableOpacity>
        </View>
        </View>
       
        <View style={styles.card}>
        <View style={styles.doctorMessage}>
 <Image source={require('./../../assets/med1.png')} />

        <Text style={{fontSize: 15, fontWeight: 700, width: 231, height:16}}>      Medicine Details</Text>
        </View>
        <Text style={styles.label1}>Medicine Name</Text>
          <View style={styles.infoBox1}>
            <Text style={styles.infoText1}>Acyclovir</Text>
          </View>
          <Text style={styles.label1}>Product Name</Text>
          <View style={styles.infoBox1}>
            <Text style={styles.infoText1}>Acyclovir 800mg</Text>
          </View>
          <Text style={styles.label1}>Producer</Text>
          <View style={styles.infoBox1}>
            <Text style={styles.infoText1}>ZyGenerics</Text>
            
          </View>
          
        {/* Doctor's follow-up */}
        <View style={styles.doctorMessage}>
          <Text>Dose</Text>
        <Image source={require('./../../assets/minus.png')} /> 
        <Text>1</Text>
        <Image source={require('./../../assets/plus.png')} /> 
        </View>
        
       
        <View style={styles.doctorMessage}>
        <TouchableOpacity>
        <Image source={require('./../../assets/Option.png')} />
        </TouchableOpacity>
        <TouchableOpacity>
        <Image source={require('./../../assets/Option1.png')} />
        </TouchableOpacity>
        <TouchableOpacity>
        <Image source={require('./../../assets/Option2.png')} />
        </TouchableOpacity>
        <TouchableOpacity>
        <Image source={require('./../../assets/Option3.png')} />
        </TouchableOpacity>
      
        </View>
        </View>
        <View style={styles.card}>
        <View style={styles.doctorMessage}>
 <Image source={require('./../../assets/med1.png')} />

        <Text style={{fontSize: 15, fontWeight: 700, width: 231, height:16}}>      Medicine Details</Text>
        <Image source={require('./../../assets/Switch1.png')} />
        </View>
        <Text style={styles.label1}>Times</Text>
          <View style={styles.infoBox1}>
            <Text style={styles.infoText1}>Four a day</Text>
          </View>
          <Text style={styles.label1}>How long?</Text>
          <View style={styles.infoBox1}>
            <Text style={styles.infoText1}>5 days</Text>
          </View>
          <Text style={styles.label1}>Start from</Text>
  
          <View style={styles.infoBox1}>
            <Text style={styles.infoText1}>Today</Text>
          </View>
          <Text style={styles.label1}>Reminder</Text>
  
  <View style={styles.infoBox1}>
    <Text style={styles.infoText1}>08:00 AM</Text>
  </View>
  
  <View style={styles.infoBox1}>
    <Text style={styles.infoText1}>11:00 AM</Text>
  </View>
  
  <View style={styles.infoBox1}>
    <Text style={styles.infoText1}>03:00 PM</Text>
  </View>
  
  <View style={styles.infoBox2}>
    <Text style={styles.infoText1}>09:00 PM</Text>
  </View>
  <Text style={styles.label1}>Snooze</Text>
  
  <View style={styles.infoBox2}>
    <Text style={styles.infoText1}>Every 2 mins</Text>
    <Image source={require('./../../assets/down.png')} />
  </View>
  </View>
     
      <View style={styles.contactSection}>
        <TouchableOpacity >
      <Image
        source={require('./../../assets/cancel.png')}/>
    </TouchableOpacity>
        <TouchableOpacity >
      <Image
        source={require('./../../assets/ok.png')} />
    </TouchableOpacity>
        </View>
        </ScrollView>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  backButton: {
    padding: 10,
    fontSize: 35,
  },
  conversationContainer: {
    padding: 16,
  },
  doctorMessage: {
    backgroundColor: 'white',
    padding: 15, 
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    borderColor: 'black',
    justifyContent:'space-between',
    paddingHorizontal: 5,
  },

  contactSection:{
    backgroundColor: 'white',
    padding: 15, 
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    borderColor: 'black',
    justifyContent:'space-between',
    

 
  },

  prescriptionContainer: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  prescriptionTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 8,
  },
  prescriptionDetails: {
    color: '#555',
    marginBottom: 16,
  },
  reminderButton: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
  endMessage: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 40,
  },
  endText: {
    color: '#888',
  },
  endTime: {
    color: '#aaa',
  },
  navBar: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    marginTop: 40,
  },
  newConsultButton: {
    backgroundColor: '#007bff',
    paddingVertical: 16,
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  icon: {
    width: 30,
    height: 30,
   
  },
  image2: {
    width: 350, 
    height: 50,  
    marginTop: 20,
    justifyContent: 'center',
    resizeMode: 'contain',
    marginBottom: 40,
    left: 15
  }, 
  label1: {
    fontSize: 13,
    fontWeight: '600',
    marginTop: 10,
    paddingLeft: 20,
  },
  infoBox1: {
    backgroundColor: 'white',
    borderRadius: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    marginVertical: 5,
  },
  infoText1: {
    fontSize: 15,
    fontWeight: '700',
  },
  infoBox2: {
    backgroundColor: 'white',
    borderRadius: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    marginVertical: 5,
    padding: 15, 
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    paddingHorizontal: 5,
  },

card: {
 
  backgroundColor: '#fff',
  borderRadius: 10,
  padding: 10,
  marginVertical: 10,
  
  
},
});

export default Livechat1Screen;
