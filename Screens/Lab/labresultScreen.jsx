import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const labresultScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header Section */}
     
        <Image source={require('./../../assets/L.Icon.png')} style={styles.headerImage} />
       
        <View style={styles.textContainer}>

          <Text style={styles.title}>Lab Results</Text>
          <Text style={styles.subTitle}>Last updated: 01:29 PM Jan 04, 2020</Text>
        
      </View>

     
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F6FA',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  textContainer: {
    marginLeft: 10,
    margin:30
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginTop: 10,
  },
  subTitle: {
    fontSize: 14,
    color: '#999',
  },
 
});

export default labresultScreen;
