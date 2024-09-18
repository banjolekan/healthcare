import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, ScrollView } from 'react-native';

export default function invoiceScreen() {

  const handleNavigation = () => {
    // Handle navigation logic here
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headerContainer}>
        <Image source={require('./../../assets/L.Icon.png')} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.contactSection}>
          <View style={styles.header}>
            <Image source={require('./../../assets/ic1.png')} />
            <Text style={styles.sectionTitle}>Invoice</Text>
          </View>

          <Text style={styles.label}>Lab-bmh</Text>
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>50,000</Text>
          </View>

          <Text style={styles.label}>Pharmacy</Text>
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>5,000</Text>
          </View>

          <Text style={styles.label}>Optometry</Text>
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>1,000</Text>
          </View>

          <Text style={styles.label}>Total</Text>
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>8,000</Text>
          </View>
          <Image source={require('./../../assets/download.png')} style={{ margin: 10, width: 335, height:48,  marginHorizontal: 5, justifyContent: 'çenter', alignItems: 'center',marginTop : 90,}} />
          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    position: 'absolute',
    top: 20,
    left: 10,
    backgroundColor: 'white',
    padding: 10,
  },
  textContainer: {
    margin: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginTop: 10,
  },
  subTitle: {
    fontSize: 11,
    fontWeight: '400',
    marginTop: 10,
  },
  scrollContainer: {
    paddingVertical: 20,
  },
  contactSection: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    marginTop: 100,
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
    paddingLeft: 20,
  },
  infoBox: {
    backgroundColor: 'white',
    borderRadius: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    marginVertical: 5,
  },
  infoText: {
    fontSize: 15,
    fontWeight: '700',
  },
});
