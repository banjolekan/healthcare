import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
const MedreminderScreen = ({ onBackPress }) => {
    return (
      <View style={styles.container}>
        <View style={styles.navBar}>
          <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
            <Image source={require('./../../assets/L.Icon.png')} style={styles.icon} />
          </TouchableOpacity>
          <View style={styles.actions}>
            <TouchableOpacity>
              <Image source={require('./../../assets/Add.png')} style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>
  
        <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 10, margin: 10 }}>Medication Reminder</Text>
  
        <Text style={{ fontSize: 19, fontWeight: '700', paddingHorizontal: 10, margin: 10 }}>Current</Text>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.card}>
            <View style={styles.imageContainer}>
              <Image source={require('./../../assets/Type.png')} />
            </View>
            <View style={styles.detailsContainer}>
              <Text style={styles.name}>Acyclovir 800mg</Text>
              <Text style={styles.profession}>For Eunice, 1 tablet/time</Text>
            </View>
          </View>
  
          <View style={styles.card1}>
  {/* New Row with Image and Text */}
  <View style={styles.card1}>
  <View style={styles.doctorMessage}>
    <Image source={require('./../../assets/srt.png')} style={styles.icon1} />
    <Text style={styles.doctorText}>Start from: Today</Text>
  </View>
  <View style={styles.doctorMessage}>
    <Image source={require('./../../assets/long.png')} style={styles.icon1} />
    <Text style={styles.doctorText}>5 days</Text>
  </View>
  <View style={styles.doctorMessage}>
    <Image source={require('./../../assets/alarm2.png')} style={styles.icon1} />
    <Text style={styles.doctorText}>4 times a day</Text>
  </View>
  <Text   style={{paddingHorizontal: 30,fontSize: 20,}}>08:00 AM  11:00 AM   03:00 PM  07:00 PM </Text>
  <View style={styles.doctorMessage}>
    <Image source={require('./../../assets/note.png')} style={styles.icon1} />
    <Text style={styles.doctorText}>Take it with or without food. Treatment should continue for five days.</Text>
  </View>
</View>

</View>
<Text style={{ fontSize: 19, fontWeight: '700', paddingHorizontal: 10, margin: 10 }}>Past</Text>
<View style={styles.card}>
            <View style={styles.imageContainer}>
              <Image source={require('./../../assets/Type.png')} />
            </View>
            <View style={styles.detailsContainer}>
              <Text style={styles.name}>Decolgen Forte</Text>
              <Text style={styles.profession}>For Myself, 1 tablet/time</Text>
            </View>
          </View>
  
          <View style={styles.card1}>
  {/* New Row with Image and Text */}
  <View style={styles.card1}>
  <View style={styles.doctorMessage}>
    <Image source={require('./../../assets/srt.png')} style={styles.icon1} />
    <Text style={styles.doctorText}>Start from: Dec 12, 2019</Text>
  </View>
  <View style={styles.doctorMessage}>
    <Image source={require('./../../assets/long.png')} style={styles.icon1} />
    <Text style={styles.doctorText}>3 days</Text>
  </View>
  <View style={styles.doctorMessage}>
    <Image source={require('./../../assets/alarm2.png')} style={styles.icon1} />
    <Text style={styles.doctorText}>2 times a day</Text>
  </View>
  <Text   style={{paddingHorizontal: 30,fontSize: 20,}}>08:00 AM   08:00 PM </Text>
  
</View>

</View>   
        </ScrollView>
      </View>
    );
  };


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  scrollContent: {
    paddingBottom: 20,
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
  backButton: {
    padding: 10,
    fontSize: 35,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
  card1 :{backgroundColor: '#fff',
    borderRadius: 10,
    marginHorizontal: 10,
    margin:10


  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 5,
    elevation: 3,
    marginVertical: 10,
    alignItems: 'center',
    marginHorizontal: 15,
  },
  imageContainer: {
    alignItems: 'center',
    marginRight: 10,
    
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  startTime: {
    marginTop: 5,
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  profession: {
    color: '#666',
    marginBottom: 5,
  },
  doctorMessage: {
    flexDirection: 'row', 
    alignItems: 'center',
    marginHorizontal: 5, 
    flex: 1, 
  },
  icon1: {
    width: 16,
    height: 16,
    marginRight: 5, 
  },
  
  doctorText: {
    fontSize: 16,
    fontWeight: '400',
    flexShrink: 1, 
    margin:8
  },
  

});

export default MedreminderScreen;
