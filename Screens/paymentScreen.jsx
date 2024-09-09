




import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, TextInput, ScrollView, ProgressBarAndroidBase } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackActions } from '@react-navigation/native';
import { Bar } from 'react-native-progress';
import { MaterialIcons } from '@expo/vector-icons';



export default function paymentScreen() {

    const navigation = useNavigation();
    const handleNavigation = () => {



    }

    return (


        <SafeAreaView style={{ flex: 1, marginTop: 30, margin: 16 }}>
           
           <ScrollView>
            <Image source={require('./../assets/Bar.png')}
                 />

               
<Text style={styles.title}>Payment Methods </Text>
<Image source={require('./../assets/master.png')}
                 />                                  
 <Image source={require('./../assets/card.png')}/> 
 <Image source={require('./../assets/pay.png')}/>               
 <Image source={require('./../assets/amex.png')}/> 
            </ScrollView>
        </SafeAreaView>
    );
}



const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        borderRadius: 20,
        marginTop: 15,
        padding: 14,


    },


    contain: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        gap: '2',
        justifyContent: 'space-between'
    },

    title: {
        fontSize: 24,
        fontWeight: '700',
        marginTop: 10,
        margin: 30
      },


    image: {
        width: 32,
        height: 32,
    },
    image1: {
        margin: 10,
        width: 112,
        height: 112,
        marginHorizontal: 100,
        justifyContent: 'çenter',
        alignItems: 'center'




    },
    text: {
        fontSize: 16,
        fontWeight: '500',
        color: '#3F7CF1',
        textAlign: 'center'
    },
});