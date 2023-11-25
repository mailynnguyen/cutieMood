import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Touchable } from 'react-native';
import StyledButton from '../components/moodCheckIn/StyledButton';
import BearImage from '../assets/bear.png';

const HelpScreen = () => {

    return (
        <View style={styles.container}>
            <View style={styles.speechBubble}>
                <View style={styles.rectangle}>
                    <Text style={styles.bubbleText}>need assistance navigating the app?</Text>
                </View>
                <View style={styles.triangle}></View>
            </View>

            <Image style={styles.image} source={BearImage} />

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>CONTACT US</Text>
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#AB6C82',
        height: 900,
        alignItems: 'center',
    },
    speechBubble: {
        alignItems: 'center',
        paddingTop: 150
    },
    rectangle: {
        backgroundColor: '#F7EEE2',
        borderRadius: 20,
        height: 160,
        width: 300,
        alignItems: 'center',
        justifyContent: 'center'
    },
    bubbleText: {
        fontFamily: 'Gaegu-Bold',
        fontSize: 30,
        color: '#685D79',
        lineHeight: 36
    },
    triangle: {
        width: 0,
        height: 0,
        borderLeftWidth: 12,
        borderRightWidth: 12,
        borderTopWidth: 60,
        borderStyle: 'solid',
        borderTopColor: '#F7EEE2',
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent'
    },
    image: {
        height: 240,
        width: 240
    },
    button: {
        height: 60,
        width: 140,
        borderRadius: 10,
        backgroundColor: '#D8737F',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50
    },
    buttonText: {
        fontFamily: 'Gaegu-Bold',
        color: '#fff',
        fontSize: 20,
    }


})

export default HelpScreen;