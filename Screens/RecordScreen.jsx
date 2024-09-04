




import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, TextInput, ScrollView, ProgressBarAndroidBase } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackActions } from '@react-navigation/native';
import { Bar } from 'react-native-progress';
import { MaterialIcons } from '@expo/vector-icons';



export default function RecordScreen() {

    const navigation = useNavigation();
    const handleNavigation = () => {



    }

    const homeData = [
        {
            image: require('./../assets/ic1 (1).png'),
            title: "Basic information",
        },
        {
            image: require('./../assets/ic1 (2).png'),
            title: "Health Metrics",
        },
        {
            image: require('./../assets/ic1 (3).png'),
            title: "Conditions & Symptoms",
        },
        {
            image: require('./../assets/ic1 (4).png'),
            title: "Clinical Vitals",
        },
        {
            image: require('./../assets/ic1 (5).png'),
            title: "Allergies",
        },

        {
            image: require('./../assets/ic1 (6).png'),
            title: "Immunization",
        },
        {
            image: require('./../assets/ic1 (7).png'),
            title: "Lab Results",
        },
        {
            image: require('./../assets/ic1 (8).png'),
            title: "Medications",
        },
        {
            image: require('./../assets/ic1 (9).png'),
            title: "Treatment History",
        },




    ];

    return (


        <SafeAreaView style={{ flex: 1, marginTop: 30, margin: 16 }}>
            <Text style={{ fontSize: 40, marginTop: 10, fontWeight: 'bold', margin: 20 }}>
                My
                Record
            </Text>

            <Image source={require('./../assets/Avatar 2.png')}
                style={styles.image1} />

            <Text style={{ fontSize: 20, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }} >Princewill Iroka  </Text>

            {/* Progress Bar */}
            <View style={{ marginVertical: 20, justifyContent: 'çenter', alignItems: 'center' }}>

                <Bar progress={0.78} width={162} height={8} color="#12b2b3" />
                <Text>Completed 78% basic profile.</Text>
            </View>

            <ScrollView>

                <View>
                    {homeData.map((data, index) => (
                        <View key={index} style={styles.container}>
                            <View style={styles.contain}>
                                <Image source={data.image}
                                    style={styles.image} />

                                <Text style={styles.text}>
                                    {data.title}
                                </Text>

                                <Image source={require('./../assets/next.png')}/>
                            </View>
                        </View>
                        
                    ))}
                </View>

<Text style={{fontSize: 20,}}>Sync with Health Services</Text>
<Text style={{fontSize: 13, fontWeight:400,width :279, height: 44,}}>By importing your health data from Smart Devices, Doctor can better help you.</Text>

 <View style={{backgroundColor: "white",borderRadius: 20,padding: 5,borderColor: '#ccc',borderWidth: 1}}>
 <View style ={{flexDirection: 'row', alignItems: 'center', padding: 10,justifyContent : 'center'}}>
 <Image source={require('./../assets/heart.png')}/>
    <Text style={{fontSize: 15,fontWeight:700}}>Select Health Data</Text>
    </View>           
    </View>      
            
            
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