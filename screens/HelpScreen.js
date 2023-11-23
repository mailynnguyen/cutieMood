import React from 'react';
import { View, Text, StyleSheet } from 'react-native';



const HelpScreen = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Help</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: 900,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {

    }


})

export default HelpScreen;