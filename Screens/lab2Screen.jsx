
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const lab2Screen = () => {
  return (
    <View style={styles.container}>
      {/* Header Section */}
     
        <Image source={require('./../assets/L.Icon.png')} style={styles.headerImage} />
       
        <View style={styles.textContainer}>

         
          
        
      </View>

      {/* Current Section */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Current</Text>
      
      </View>

      {/* 1*/}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>Lapid Panel</Text>
          <Text style={styles.date}>Last updated: Jan 02, 2020 by Dr. Kay Adeola</Text>
        </View>
        <Text style={styles.description}>You are taking too much sugar, resulting to...</Text>
        
      </View>
  {/* 1*/}
  <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>Urinalysis</Text>
          <Text style={styles.date}>Last updated: Jan 02, 2020 by Dr. Kay Adeola</Text>
        </View>
        <Text style={styles.description}>Neck pain, upper back pain, and lower back pain, generally affecting one side of the body or one side of the body much more than
        the other.</Text>
        
      </View>
      {/* Second Condition Card */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>Urinalysis</Text>
          <Text style={styles.date}>Last updated: Jan 01, 2020 by Myself</Text>
        </View>
        <Text style={styles.description}>
        Neck pain, upper back pain, and lower back pain, generally affecting one side of the body or one side of the body much more than
the other.
        </Text>
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
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
  },
  addText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  cardHeader: {
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  date: {
    color: '#999',
    fontSize: 12,
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
  noConditionsContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  noConditionsText: {
    fontSize: 16,
    color: '#999',
  },
});

export default lab2Screen;
