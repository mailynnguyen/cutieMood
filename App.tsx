import React from 'react';


import MainContainer from './screens/MainContainer';

import { useFonts } from 'expo-font';


import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { View, Text, StyleSheet } from 'react-native';


const Stack = createNativeStackNavigator();



export default function App() {
    const [fontsLoaded] = useFonts({
        'Gaegu-Reg': require('./assets/font/Gaegu-Regular.ttf'),
        'Gaegu-Bold': require('./assets/font/Gaegu-Bold.ttf')
    })

    if (!fontsLoaded) {
        return <View><Text>Loading...</Text></View>;
    }



    return (
        <View style={styles.container}>
            
                <MainContainer />
        
        </View>
        
    )

}

const styles = StyleSheet.create({
    container: {
        height: 920,
    },

})