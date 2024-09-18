import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, ScrollView } from 'react-native';

export default function ContactScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.contactSection}>
          <View style={styles.header}>
            <Image source={require('./../../assets/Icon_Title.png')} />
            <Text style={styles.sectionTitle}>Contact Information</Text>
          </View>

          <Text style={styles.label}>Email</Text>
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>princewill@gmail.com</Text>
          </View>

          <Text style={styles.label}>Emergency Phone</Text>
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>+234</Text>
            <Image source={require('./../../assets/R.Icon.png')} />
            <Text style={styles.infoText}>9068-926-0227</Text>
          </View>

          <Text style={styles.label}>Address</Text>
          <View style={styles.infoBox}>
          <Image source={require('./../../assets/map.png')} />
            <Text style={styles.infoText}>Ogunablli Str. Port Harcourt</Text>
            
          </View>

          <View style={styles.header}>
            <Image source={require('./../../assets/Icon_Title (1).png')} />
            <Text style={styles.sectionTitle}>Emergency Contact</Text>
          </View>

          <Text style={styles.label}>Contact Name</Text>
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>Jane Foster</Text>
          </View>

          <Text style={styles.label}>Emergency Phone</Text>
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>+234</Text>
            <Image source={require('./../../assets/R.Icon.png')} />
            <Text style={styles.infoText}>9068-926-0227</Text>
          </View>

          <Text style={styles.label}>Relationship</Text>
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>Wife</Text>
            
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    padding: 20,
  },
  contactSection: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: '600',
    paddingLeft: 20,
  },
  label: {
    fontSize: 13,
    fontWeight: '600',
    marginTop: 10,
    alignSelf: 'flex-start',
    paddingLeft: 20,
  },
  infoBox: {
    backgroundColor: 'white',
    borderRadius: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  infoText: {
    fontSize: 15,
    fontWeight: '700',
  },
});
