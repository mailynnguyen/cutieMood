import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Note from '../components/moodCheckIn/Notepad';
import CheckIn from '../components/moodCheckIn/CheckIn';
import StyledButton from '../components/moodCheckIn/StyledButton';

const MoodCheckInScreen = ( { navigation } ) => {
    // for typing in notepad and then pressing outside to exit keyboard
    const handlePressOutside = () => {
        Keyboard.dismiss(); // dismiss the keyboard when tapping outside the text input
    }

    return (
        <TouchableWithoutFeedback onPress={handlePressOutside}>
            <View style={styles.container}>

                <View style={styles.title}>
                    <Text style={styles.textTitle}>Hi,</Text>
                    <Text style={styles.textTitle}>How do you feel today?</Text>
                </View>

                <View style={styles.checkIn}>
                    <CheckIn />
                </View>

                <View style={styles.notepad}>
                    <Note />
                </View>

                <View style={styles.button}
                    
                >

                    <StyledButton onPress={() => navigation.navigate('Calendar')} />
                </View>
                
            </View>
        </TouchableWithoutFeedback>

    );
};

// Styles for the components
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#685D79',
        alignItems: 'center'
    },

    title: {
        paddingTop: 100,
        fontSize: 20,
        width: 300
    },

    textTitle: {
        paddingBottom: 8,
        color: '#fff',
        fontSize: 30,
        fontFamily: 'Gaegu-Bold'
    },

    checkIn: {
        paddingTop: 70
    },

    notepad: {
        paddingTop: 20,
    },

    button: {
        marginTop: 60,
        marginBottom: 200,
    }
});

export default MoodCheckInScreen;