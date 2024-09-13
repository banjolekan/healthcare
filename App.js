import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RecordScreen from './Screens/RecordScreen';
import { NavigationContainer } from '@react-navigation/native';
import basicinformation from './Screens/basicinformation';
import contactScreen from './Screens/contactScreen';
import BasicInformation from './Screens/basicinformation';
import EmergencyScreen from './Screens/EmergenrcyScreen';
import ConditionsScreen from './Screens/ConditionScreen';
import treatmentScreen from './Screens/treatmentScreen';
import treatmentHscreen from './Screens/treatmentHscreen';
import medicationScreen from './Screens/medicationScreen';
import medication1Screen from './Screens/medication1Screen';
import lab1Screen from './Screens/lab1Screen';
import lab2Screen from './Screens/lab2Screen';
import labresultScreen from './Screens/labresultScreen';
import immunization1Screen from './Screens/Immunization1Screen';
import ClinicalScreen from './Screens/clinicalScreen';
import AllergieScreen1 from './Screens/AllergieScreen1';
import AllergieScreen2 from './Screens/AllergieScreen2';
import accountScreen from './Screens/accountScreen';
import AccountfileScreen from './Screens/accountfileScreen';
import accountfileScreen from './Screens/accountfileScreen';
import paymentScreen from './Screens/paymentScreen';
import payment1Screen from './Screens/payment1Screen';
import loginScreen from './Screens/loginScreen';
import billingScreen from './Screens/billingScreen';
import billing1Screen from './Screens/billing1Screen';
import invoiceScreen from './Screens/invoiceScreen';

import ConsultationsScreen from './Screens/past consultation/consultationScreen';
import consultScreen from './Screens/past consultation/consultScreen';
import OnlineappointScreen from './Screens/past consultation/OnlineappointScreen';
import VideocallScreen from './Screens/past consultation/VideocallScreen';
import LivechatScreen from './Screens/past consultation/LivechatScreen';
import Livechat1Screen from './Screens/past consultation/Livechat1Screen';
import ReminderScreen from './Screens/past consultation/ReminderScreen';


const Stack = createNativeStackNavigator();


export default function App() {
return(
  <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="basic"
     component={ReminderScreen} 
     options={{headerShown: false}} />
       </Stack.Navigator>
       </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
