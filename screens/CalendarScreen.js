import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const CalendarScreen = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Calendar</Text>
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

export default CalendarScreen;