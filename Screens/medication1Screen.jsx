import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, ScrollView } from 'react-native';

export default function medication1Screen() {

  const handleNavigation = () => {
    // Handle navigation logic here
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headerContainer}>
        <Image source={require('./../assets/L.Icon.png')} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Medication</Text>
          <Text style={styles.subTitle}>Last updated: 01:29 PM Jan 04, 2020</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.contactSection}>
          <View style={styles.header}>
            <Image source={require('./../assets/ic1.png')} />
            <Text style={styles.sectionTitle}> General Medication</Text>
          </View>

          <Text style={styles.label}>Paracetamol</Text>
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>2 / dose</Text>
          </View>

          <Text style={styles.label}>White capsule</Text>
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>1/ usage</Text>
          </View>

          <Text style={styles.label}>Paracetamol</Text>
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>2 / dose</Text>
          </View>

          <Text style={styles.label}>Paracetamol</Text>
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>2 / dose</Text>
          </View>

          <View style={styles.header}>
            <Image source={require('./../assets/ic2.png')} />
            <Text style={styles.sectionTitle}>Advance Medication</Text>
          </View>

          
          <Text style={styles.label}>Tetanus Injection</Text>
          <View style={styles.infoBox}>
            <Text style={styles.infoText}></Text>
          </View>

          <Text style={styles.label}>Cancer Injection</Text>
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>1/ 2 days</Text>
          </View>

          <Text style={styles.label}>Tetanus Injection</Text>
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>1/ 2 days</Text>
          </View>

          <Text style={styles.label}>Tetanus Injection</Text>
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>1/ 2 days</Text>
          </View>

          <Text style={styles.label}>Tetanus Injection</Text>
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>1/ 2 days</Text>
          </View>

          <Text style={styles.label}>Tetanus Injection</Text>
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>1/ 2 days</Text>
          </View>

          <Text style={styles.label}>Tetanus Injection</Text>
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>1/ 2 days</Text>
          </View>
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
