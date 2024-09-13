import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView,Image } from 'react-native';

const Livechat1Screen = ({ onBackPress }) => {
  return (
    <View style={styles.container}>


      {/* Navigation Bar */}
      <View style={styles.navBar}>
        <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
          <Image source={require('./../../assets/L.Icon.png')} style={styles.icon} />
        </TouchableOpacity>
        <View style={styles.actions}>
         <Text  style={{fontSize : 32, textAlign: 'center', justifyContent: 'center'}}>Live Chat Consult</Text>
         <Text> </Text>
          <TouchableOpacity>
            <Image source={require('./../../assets/Add.png')} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.conversationContainer}>
        {/* Doctor's message */}
        <View style={styles.doctorMessage}>
          <Text style={styles.doctorText}>
            Get her something warm to drink which is easy to eat like vegetable soup. 
            I’m gonna prescribe a drug. Are there any pharmacies nearby?
          </Text>
        </View>

        {/* User's response */}
        <View style={styles.userMessage}>
          <Text style={styles.userText}>
            Yes. Please send me the prescription. I will take it for her.
          </Text>
        </View>

        {/* Doctor's follow-up */}
        <View style={styles.doctorMessage}>
          <Text style={styles.doctorText}>
            Follow up prescription and she will be fine.
          </Text>
        </View>

        {/* Prescription section */}
        <View style={styles.prescriptionContainer}>
          <Text style={styles.prescriptionTitle}>Acyclovir</Text>
          <Text style={styles.prescriptionDetails}>
            800 mg Acyclovir four times daily, with or without food. Treatment should continue for five days.
          </Text>
          <TouchableOpacity >
      <Image
        source={require('./../../assets/take.png')} style={{width: 263,height: 36,   marginTop: 20,justifyContent: 'center',resizeMode: 'contain',left:25}} 
      
      />
    </TouchableOpacity>
        </View>

        {/* User's confirmation */}
        <View style={styles.userMessage}>
          <Text style={styles.userText}>I got it. Thanks so much!</Text>
        </View>

        {/* Consult ended */}
        <View style={styles.endMessage}>
          <Text style={styles.endText}>Consult ended</Text>
          <Text style={styles.endTime}>07:35 PM Dec, 12 2019</Text>
        </View>
      </ScrollView>

    

      <View style={styles.contactSection}>
        <TouchableOpacity >
      <Image
        source={require('./../../assets/new.png')} 
        style={styles.image2}
      />
    </TouchableOpacity>
        </View>

      
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
    backgroundColor: '#007bff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  doctorText: {
    color: '#fff',
  },
  userMessage: {
    backgroundColor: '#e5e5ea',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'flex-end',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userText: {
    color: '#000',
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
    justifyContent: 'space-between',
    alignItems: 'center',
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
    marginLeft: 10,
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
});

export default Livechat1Screen;
