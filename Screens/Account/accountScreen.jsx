




import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, TextInput, ScrollView, ProgressBarAndroidBase } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackActions } from '@react-navigation/native';
import { Bar } from 'react-native-progress';
import { MaterialIcons } from '@expo/vector-icons';



export default function accountScreen() {

    const navigation = useNavigation();
    const handleNavigation = () => {



    }

    const homeData = [
        {
            image: require('./../../assets/ic_files.png'),
            title: "Files",
        },
        {
            image: require('./../../assets/billing.png'),
            title: "Billing",
        },
        {
            image: require('./../../assets/payment.png'),
            title: "Payment Method",
        },
        {
            image: require('./../../assets/settings.png'),
            title: "Settings",
        },
        {
            image: require('./../../assets/ic_dark_mode.png'),
            title: "Dark Mode",
           
        },

        {
            image: require('./../../assets/about.png'),
            title: "About Doctor Plus",
        },
        {
            image: require('./../../assets/support.png'),
            title: "Help & Support",
        },
        {
            image: require('./../../assets/policy.png'),
            title: "Privacy and Policy",
        },
       




    ];

    return (


        <SafeAreaView style={{ flex: 1, marginTop: 30, margin: 16 }}>
           
           <ScrollView>
            <Image source={require('./../../assets/Account.png')}
                 />

                <View>
                    {homeData.map((data, index) => (
                        <View key={index} style={styles.container}>
                            <View style={styles.contain}>
                                <Image source={data.image}
                                    style={styles.image} />

                                <Text style={styles.text}>
                                    {data.title}
                                </Text>

            <Image 
                source={data.title === "Dark Mode" ? require('./../../assets/switch.png') : require('./../../assets/next.png')} 
            />

                            </View>
                        </View>
                        
                    ))}
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