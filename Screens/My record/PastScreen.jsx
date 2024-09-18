import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Text } from 'react-native';

const navigation = ({ onBackPress }) => {
  return (
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








  );
};

const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingVertical: 10,
    backgroundColor: '#fff',
    marginTop:40
  },
  backButton: {
    padding: 5,
    fontSize: 35
  },
  actions: {
    flexDirection: 'row',
  },
  icon: {
    width: 29,
    height: 29,
    marginLeft: 15,
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
  icon: {
    width: 40,
    height: 40,
    marginRight: 15,
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

export default PastScreen;

