import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RecordScreen from './Screens/RecordScreen';
import { NavigationContainer } from '@react-navigation/native';
import basicinformation from './Screens/basicinformation';


const Stack = createNativeStackNavigator();


export default function App() {
return(
  <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="basic"
     component={basicinformation} 
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
