




import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, TextInput, ScrollView, ProgressBarAndroidBase } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackActions } from '@react-navigation/native';
import { Bar } from 'react-native-progress';
import { MaterialIcons } from '@expo/vector-icons';



export default function payment1Screen() {

    const navigation = useNavigation();
    const handleNavigation = () => {



    }

    return (


        <SafeAreaView style={{ flex: 1, marginTop: 30, margin: 16 }}>
           
           <ScrollView>
            <Image source={require('./../assets/Bar.png')}
                 />

               
<Text style={styles.title}>Payment Methods </Text>

<Image source={require('./../assets/card1.png')} style={styles.image1} />

<Text  style={{fontSize:17, fontWeight:700, textAlign : 'center', justifyContent: 'center'}}>No card attached yet! </Text>
<Text  style={{fontSize:15, fontWeight:400, textAlign : 'center'}}>Please, attach your card to pay for your consult. Thanks! </Text>
<Image source={require('./../assets/btn_next.png')} style={{ margin: 10,
        width: 257,
        height: 50,
        marginHorizontal: 40,
        justifyContent: 'çenter',
        alignItems: 'center',
        marginTop : 40,}} />
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
    image1: {
        margin: 10,
        width: 150,
        height: 150,
        marginHorizontal: 100,
        justifyContent: 'çenter',
        alignItems: 'center',
        marginTop : 40,



    },
    text: {
        fontSize: 16,
        fontWeight: '500',
        color: '#3F7CF1',
        textAlign: 'center'
    },
});