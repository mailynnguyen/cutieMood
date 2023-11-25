import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const StyledButton = ({ onPress }) => {


    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>DONE</Text>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    button: {
        height: 50,
        width: 120,
        borderRadius: 10,
        backgroundColor: '#F7EEE2',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontFamily: 'Gaegu-Bold',
        fontSize: 20,
        color: '#475C7A',
    }



})

export default StyledButton;