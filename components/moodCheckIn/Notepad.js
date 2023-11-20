import React from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput } from 'react-native';


const Note = () => {
    

    return (
        <View style={styles.notepad}>
            <Text style={styles.noteTitle}>NOTE</Text>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.writeTextWrapper}>
                <TextInput
                    style={styles.input}
                    multiline={true}
                    numberOfLines={9}
                    placeholder="type here..."
                    placeholderStyle={styles.placeholder}
                />
            </KeyboardAvoidingView>
        </View>


    )
}



const styles = StyleSheet.create({
    notepad: {
        backgroundColor: '#F7EEE2',
        borderRadius: 20,
        height: 300,
        width: 300
    },
    noteTitle: {
        fontFamily: 'Gaegu-Bold',
        color: '#475C7A',
        fontSize: 20,
        paddingTop: 20,
        paddingLeft: 20
    },
    writeTextWrapper: {
        paddingTop: 10,
        paddingHorizontal: 20
    },
    placeholder: {
        fontFamily: 'Gaegu-Reg',
        fontSize: 20
        
    },
    input: {
        fontFamily: 'Gaegu-Bold',
        fontSize: 20,
        textAlignVertical: 'top'
    }


});

export default Note;