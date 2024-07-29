import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase.config";
import { StyleSheet, View, Keyboard, Text, TouchableWithoutFeedback } from "react-native";
import Moods from "../components/getNote/Moods";
import Note from "../components/getNote/Note";
import CustomButton from "../components/postNote/CustomButton";
import { useNavigation, useRoute } from '@react-navigation/native';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { moods } from "../data/moods";
import { useEffect, useState } from "react";

const GetNoteScreen = ({ setEdit, edit }) => {
    const navigation = useNavigation();
    const route = useRoute();
    // route parameters from CustomCalendar/CalendarScreen
    const {note, mood, dayPressed, pressed} = route.params || {};
    
    const [noteState, setNoteState] = useState(note);
    const [moodState, setMoodState] = useState(mood);

    // Initial render to ...
    // const [savedMoodIndex, setSavedMoodIndex] = useState(-1);
    // useEffect(() => {
    //     moods.forEach((moodEach, index) => {
    //         if (moodEach === mood)
    //             setSavedMoodIndex(index);
    //     })
    // }, []);

    // EDIT button is pressed
    const handleEditPress = async () => {
        try {
            const docRef = doc(db, "notes", dayPressed);
            // edit the doc
            await setDoc(docRef, {
                note: noteState,
                mood: moodState,
            });
            setEdit(!edit);
            navigation.goBack();
        } catch (error) {
            console.log("Error updating document: ", error);
        }
    }

    const handleBackButton = () => {
        setNoteState(note);
        setMoodState(mood);
        navigation.goBack();
    }
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAwareScrollView style={styles.container}>
                <Text style={styles.text}>{dayPressed}</Text>
                <Moods setMoodState={setMoodState} moodState={moodState} pressed={pressed} />
                <Note noteState={noteState} setNoteState={setNoteState} />
                <View style={styles.buttons}>
                    {/* Go Back Button */}
                    <CustomButton title="GO BACK" onPress={handleBackButton} />
                    {/* Edit Button */}
                    <CustomButton title="EDIT" onPress={handleEditPress} />
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