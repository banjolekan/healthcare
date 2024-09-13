

import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';

const consultations = [
  {
    id: '1',
    type: 'Video Call',
    status: 'Completed',
    doctor: 'Dr. Frank Olagbegi',
    time: '05:00 PM - 05:28 PM',
    date: 'Jan 2, 2020',
    icon: require('./../../assets/Ava.png'),
  },
  {
    id: '2',
    type: 'Message',
    status: 'Completed',
    doctor: 'Dr. Ethel Omoge',
    time: 'Message sent at 1:24 PM',
    date: 'Jan 2, 2020',
    icon: require('./../../assets/Ava.png'),
  },
  {
    id: '3',
    type: 'Voice Call',
    status: 'Canceled',
    doctor: 'Dr. Kade Ayomikun',
    time: '09:30 AM - 10:00 AM',
    date: 'Jan 2, 2020',
    icon: require('./../../assets/Ava.png'),
  },
  {
    id: '4',
    type: 'Appointment',
    status: 'Completed',
    doctor: 'Dr. Margaret Ochei',
    time: '08:00 AM - 08:30 AM',
    date: 'Dec 16, 2019',
    icon: require('./../../assets/Ava.png'),
  },
];

const ConsultationScreen = () => {
  const onBackPress = () => {
    // Handle back press action
  };

  const renderConsultation = ({ item }) => (
    <View style={styles.consultationContainer}>
      <Image source={item.icon} style={styles.icon} />
      <View style={styles.consultationDetails}>
        <Text style={styles.type}>{item.type}</Text>
        <Text style={styles.doctor}>{item.doctor}</Text>
        <Text style={styles.time}>{item.time}</Text>
      </View>
      <Text style={[styles.status, item.status === 'Completed' ? styles.completed : styles.canceled]}>
        {item.status}
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navBar}>
        <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
          <Image source={require('./../../assets/L.Icon.png')} style={styles.icon} />
        </TouchableOpacity>
        <View style={styles.actions}>
          <TouchableOpacity>
            <Image source={require('./../../assets/Cal.png')} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('./../../assets/Add.png')} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
      
      <FlatList
        data={consultations}
        keyExtractor={(item) => item.id}
        renderItem={renderConsultation}
        ListHeaderComponent={() => <Text style={styles.dateHeader}>Next Consults</Text> }
      />


    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  backButton: {
    padding: 10,
  },
  actions: {
    flexDirection: 'row',
  },
  icon: {
    width: 25,
    height: 25,
    marginHorizontal: 10,
  },
  consultationContainer: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  consultationDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  type: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  doctor: {
    fontSize: 13,
    color: '#666',
    marginTop: 5,
  },
  time: {
    fontSize: 12,
    color: '#999',
    marginTop: 5,
  },
  status: {
    alignSelf: 'center',
    fontSize: 14,
    fontWeight: 'bold',
  },
  completed: {
    color: '#28a745',
  },
  canceled: {
    color: '#dc3545',
  },
  dateHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
    paddingLeft: 10,
  },
});

export default ConsultationScreen;
