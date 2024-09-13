import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // For the star icon

const VideocallScreen = ({ onBackPress }) => {
  return (
    <View style={styles.container}>
      {/* Navigation Bar */}
      <View style={styles.navBar}>
        <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
          <Image source={require('./../../assets/L.Icon.png')} style={styles.icon} />
        </TouchableOpacity>
        <View style={styles.actions}>
         <Text  style={{fontSize : 32, textAlign: 'center', justifyContent: 'center'}}>Video Call Consult</Text>
         <Text> </Text>
          <TouchableOpacity>
            <Image source={require('./../../assets/Add.png')} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Doctor Card */}
        <View style={styles.card}>
          {/* Image and Online Indicator */}
          <View style={styles.imageContainer}>
            <Image source={require('./../../assets/Ava.png')} 
                style={styles.image}
              />
            <View style={styles.onlineIndicator} />
          </View>

          {/* Text Details */}
          <View style={styles.detailsContainer}>
            <Text style={styles.name}>Dr.
            Frank Olagbegi</Text>
            <Text style={styles.profession}>Pediatrics</Text>
            <View style={styles.ratingContainer}>
              <MaterialIcons name="star" size={18} color="orange" />
              <Text style={styles.rating}>4.8</Text>
              <Text style={styles.location}>UPTH</Text>
            </View>
          </View>
        </View>

        {/* Request Time Section */}
        <View style={styles.contactSection}>
          <View style={styles.header}>
              <Image source={require('./../../assets/Cal1.png')} />
              <Text style={styles.sectionTitle}>Visit Time</Text>
          </View>
          <Text style={styles.infoText}>Dec 16, 2019</Text>
          <Text style={styles.infoText}>05:00 PM - 05:28 PM</Text>
          <Text style={styles.infoText}>Video Call Consult: NGN4,500 / visit</Text>
        </View>

        {/* Consult Details Section */}
        <View style={styles.contactSection}>
          <View style={styles.header}>
            <Image source={require('./../../assets/qu.png')} />
            <Text style={styles.sectionTitle}>Consult Details</Text>
          </View>
          
          <Text style={styles.questionTitle}>My Question</Text>
          <Text style={styles.subtitleText1}>Request sent at 12: 21 AM Dec 15, 2019</Text>
          <Text style={styles.infoText}>For Eunice, 4 years old</Text>
          <Text style={styles.infoText}>
          6 year old daughter got pushed/hit in the throat in a foolish game of child play. Complains of pain in back of neck and while swallowing. Suggestions?
          </Text>
         
        </View>

        {/* Doctor's Answer Section */}
        <View style={styles.contactSection}>
          <View style={styles.header}>
              <Text style={styles.sectionTitle}>Doctor's Answer</Text>
          </View>
          <Text style={styles.infoText}>Answered 04:35 PM Dec 24 2019</Text>
          <Text style={styles.infoText}>It is worthwhile to,peek down her throat with a laryngoscope to see if any damage has been done to her larynx or trachea </Text>
         
          <TouchableOpacity style={{marginTop: 220}} >
      <Image
        source={require('./../../assets/text.png')} 
        style={styles.image2}
      />
    </TouchableOpacity>

 <TouchableOpacity >
      <Image
        source={require('./../../assets/new.png')} 
        style={styles.image2}
      />
    </TouchableOpacity>
        
        </View>
        <View style={styles.contactSection}>
          <View style={styles.header}>
              <Image source={require('./../../assets/dot.png')} />
              <Text style={styles.sectionTitle}>Additional Information</Text>
          </View>
          <Text style={styles.label1}>Diagnosed Conditions</Text>
          <View style={styles.infoBox1}>
            <Text style={styles.infoText1}>Flu & Colde</Text>
          </View>
          <Text style={styles.label1}>Medication</Text>
          <View style={styles.infoBox1}>
            <Text style={styles.infoText1}>Pelicillin</Text>
          </View>
          <Text style={styles.label1}>Allegeies</Text>
          <View style={styles.infoBox1}>
            <Text style={styles.infoText1}>Hives</Text>
          </View>
      
        </View>
        <View style={styles.contactSection}>
          <View style={styles.header}>
              <Image source={require('./../../assets/rate.png')} />
              <Text style={styles.sectionTitle}>Service Review</Text>
          </View>
          <Image source={require('./../../assets/star.png')}
           style={{width: 184, height: 24,  marginTop: 20,justifyContent: 'center',alignItems: 'center',alignContent: 'center',left: 75 }}/>
           <Text style={styles.infoText}>Dr. Frank provides answers that are very helpful, knowledgeable, caring, professional and practical. Thank you so much for solving my problem. </Text>
          
            
        <Text  style={{fontSize: 11, fontWeight:400, color: '#9393AA', textAlign: 'center',marginTop : 30}}>For medical emergencies, please call 911 (or your local emergency services) or go to the nearest EHMS affiliated
        facility near to you</Text>
         
       
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
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
  contactSection: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    marginTop: 10,
  },
  imageContainer: {
    marginRight: 10,
    position: 'relative',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  onlineIndicator: {
    position: 'absolute',
    width: 12,
    height: 12,
    backgroundColor: 'green',
    borderRadius: 6,
    top: 0,
    right: 0,
    borderWidth: 2,
    borderColor: '#fff',
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
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    color: '#666',
    marginLeft: 5,
    marginRight: 10,
  },
  location: {
    color: '#666',
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: '600',
    paddingLeft: 20,
    marginTop: 15
  },
  infoText: {
    fontSize: 15,
    fontWeight: '400',
    paddingHorizontal: 10,
    marginTop: 10
  },
  questionTitle: {
    fontSize: 15,
    fontWeight: '700',
    paddingHorizontal: 10,
  },
  container1: {
    flexDirection: 'row',
    alignItems: 'center', 
    padding: 10,
  },
  image1: {
    width: 100,
    height: 72,
    marginRight: 10,
  },
  textContainer1: {
    flexDirection: 'column',
  },
  titleText1: {
    fontSize: 13,
    fontWeight: 400,
  },
  subtitleText1: {
    fontSize: 14,
    color: 'gray',
  },
  answerImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginTop: 15
  },
  button: {
    
  },
  image2: {
    width: 350, 
    height: 50,  
    marginTop: 20,
    justifyContent: 'center',
    resizeMode: 'contain',
  }, 
   label1: {
    fontSize: 13,
    fontWeight: '600',
    marginTop: 10,
    paddingLeft: 20,
  },
  infoBox1: {
    backgroundColor: 'white',
    borderRadius: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    marginVertical: 5,
  },
  infoText1: {
    fontSize: 15,
    fontWeight: '700',
  },
  
});

export default VideocallScreen;
