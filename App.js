import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RecordScreen from './Screens/My record/RecordScreen';
import { NavigationContainer } from '@react-navigation/native';
import basicinformation from './Screens/My record/basicinformation';
import contactScreen from './Screens/My record/contactScreen';
import BasicInformation from './Screens/My record/basicinformation';
import EmergencyScreen from './Screens/Treatment/EmergenrcyScreen';
import ConditionsScreen from './Screens/My record/ConditionScreen';
import treatmentScreen from './Screens/Treatment/treatmentScreen';
import treatmentHscreen from './Screens/Treatment/treatmentHscreen';
import medicationScreen from './Screens/Treatment/medicationScreen';
import medication1Screen from './Screens/Treatment/medication1Screen';
import lab1Screen from './Screens/Lab/lab1Screen';
import lab2Screen from './Screens/Lab/lab2Screen';
import labresultScreen from './Screens/Lab/labresultScreen';
import immunization1Screen from './Screens/Treatment/Immunization1Screen';
import ClinicalScreen from './Screens/Treatment/clinicalScreen';
import AllergieScreen1 from './Screens/Treatment/AllergieScreen1';
import AllergieScreen2 from './Screens/Treatment/AllergieScreen2';
import accountScreen from './Screens/Account/accountScreen';
import AccountfileScreen from './Screens/Account/accountfileScreen';
import accountfileScreen from './Screens/Account/accountfileScreen';
import paymentScreen from './Screens/Account/paymentScreen';
import payment1Screen from './Screens/Account/payment1Screen';
import loginScreen from './Screens/Account/loginScreen';
import billingScreen from './Screens/Account/billingScreen';
import billing1Screen from './Screens/Account/billing1Screen';
import invoiceScreen from './Screens/Account/invoiceScreen';

import ConsultationsScreen from './Screens/past consultation/consultationScreen';
import consultScreen from './Screens/past consultation/consultScreen';
import OnlineappointScreen from './Screens/past consultation/OnlineappointScreen';
import VideocallScreen from './Screens/past consultation/VideocallScreen';
import LivechatScreen from './Screens/past consultation/LivechatScreen';
import Livechat1Screen from './Screens/past consultation/Livechat1Screen';
import ReminderScreen from './Screens/past consultation/ReminderScreen';
import MedreminderScreen from './Screens/past consultation/MedreminderScreen';


const Stack = createNativeStackNavigator();


export default function App() {
return(
  <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="basic"
     component={MedreminderScreen} 
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
