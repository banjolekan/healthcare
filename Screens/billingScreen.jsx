import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const billingScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <Image source={require('./../assets/L.Icon.png')} style={styles.headerImage} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>Billing</Text>
      </View>

     
        {/* Current Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Current</Text>
          <View>
            <Text style={styles.addText}>Pending</Text>
          </View>
        </View>
         {/* Scrollable Content */}
      <ScrollView>

        {/* First Condition Card */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Lab-BMH</Text>
            <Text style={styles.Amount}>NGN4,500</Text>
            <Text style={styles.date}>Last updated: Jan 02, 2020 by Dr. Kay Adeola</Text>
          </View>
          <Text style={styles.description}>
            Neck pain, upper back pain, and lower back pain, generally affecting one side of the body or one side of the body much more than the other.
          </Text>
        </View>

        {/* Second Condition Card */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Pharmarcy-BMH</Text>
            <Text style={styles.Amount}>NGN6,000</Text>
            <Text style={styles.date}>Last updated: Jan 01, 2020 by Myself</Text>
          </View>
          <Text style={styles.description}>
            Neck pain, upper back pain, and lower back pain, generally affecting one side of the body or one side of the body much more than the other.
          </Text>
        </View>

        {/* Other Condition Cards */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>ALA LAB</Text>
            <Text style={styles.Amount}>NGN6,000</Text>
            <Text style={styles.date}>Last updated: Jan 02, 2020 by Dr. Kay Adeola</Text>
          </View>
          <Text style={styles.description}>
            Neck pain, upper back pain, and lower back pain, generally affecting one side of the body or one side of the body much more than the other.
          </Text>
        </View>

        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Aroma Optical</Text>
            <Text style={styles.Amount}>NGN1,000</Text>
            <Text style={styles.date}>Last updated: Jan 02, 2020 by Dr. Kay Adeola</Text>
          </View>
          <Text style={styles.description}>
            Neck pain, upper back pain, and lower back pain, generally affecting one side of the body or one side of the body much more than the other.
          </Text>
        </View>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Aroma Optical</Text>
            <Text style={styles.Amount}>NGN1,000</Text>
            <Text style={styles.date}>Last updated: Jan 02, 2020 by Dr. Kay Adeola</Text>
          </View>
          <Text style={styles.description}>
            Neck pain, upper back pain, and lower back pain, generally affecting one side of the body or one side of the body much more than the other.
          </Text>
        </View>
        <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Past</Text>
      </View>

        {/* No Conditions Message */}
        <View style={styles.noConditionsContainer}>
          <Text style={styles.noConditionsText}>No Pending Billing</Text>
        </View>
      </ScrollView>
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
    margin: 30,
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
    color: '#FF03D7',
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
    marginTop: 10,
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
  Amount: {
    fontSize: 15,
    fontWeight: '400',
    color: '#FD0000',
    marginTop: 10,
  },
});

export default billingScreen;
