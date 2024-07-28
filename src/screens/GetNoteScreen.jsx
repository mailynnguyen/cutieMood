import { StyleSheet, View, Keyboard, Text, TouchableWithoutFeedback } from "react-native";
import Moods from "../components/getNote/Moods";
import Note from "../components/getNote/Note";
import CustomButton from "../components/postNote/CustomButton";
import { useNavigation, useRoute } from '@react-navigation/native';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { moods } from "../data/moods";
import { useEffect, useState } from "react";

const GetNoteScreen = () => {
    const navigation = useNavigation(); // Initialize navigation
    const route = useRoute(); // Initialize route

    // route parameters from CustomCalendar/CalendarScreen
    const {note, mood, dayPressed} = route.params || {};
    

    const [savedMoodIndex, setSavedMoodIndex] = useState(-1);
    useEffect(() => {
        moods.forEach((moodEach, index) => {
            if (moodEach === mood)
                setSavedMoodIndex(index);
        })
    }, []);

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAwareScrollView style={styles.container}>
                <Text style={styles.text}>{dayPressed}</Text>
                <Moods savedMoodIndex={savedMoodIndex} />
                <Note note={note} />
                <View style={styles.buttons}>
                    {/* Go Back Button */}
                    <CustomButton title="GO BACK" onPress={() => navigation.goBack()} />
                    {/* Edit Button */}
                    <CustomButton title="EDIT" onPress={() => navigation.goBack()} />
                </View>
            </KeyboardAwareScrollView>
        </TouchableWithoutFeedback>
    )
}

export default GetNoteScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#475C7A",
        height: "100%",
    },
    buttons: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
    text: {
        color: "white",
        fontFamily: "Gaegu-Bold",
        fontSize: 40,
        textAlign: "center",
        marginTop: "20%",
    }
})