




import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, TextInput, ScrollView, ProgressBarAndroidBase } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackActions } from '@react-navigation/native';
import { Bar } from 'react-native-progress';
import { MaterialIcons } from '@expo/vector-icons';



export default function loginScreen() {

    const navigation = useNavigation();
    const handleNavigation = () => {



    }

    return (


        <SafeAreaView style={{ flex: 1, marginTop: 30, margin: 16 }}>
           
           <ScrollView>
            <Image source={require('./../../assets/L.Icon.png')}
                 />

               


<Image source={require('./../../assets/login.png')} style={styles.image1} />


<Text  style={{fontSize:15, fontWeight:400, textAlign : 'center'}}> Thanks very much</Text>
<Image source={require('./../../assets/dash.png')} style={{ margin: 10, width: 335, height:48,  marginHorizontal: 5, justifyContent: 'çenter', alignItems: 'center',marginTop : 90,}} />
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
        marginTop : 90,



    },
    text: {
        fontSize: 16,
        fontWeight: '500',
        color: '#3F7CF1',
        textAlign: 'center'
    },
});