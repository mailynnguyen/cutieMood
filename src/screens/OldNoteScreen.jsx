import { doc, setDoc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase.config";
import { StyleSheet, View, Keyboard, Text, TouchableWithoutFeedback } from "react-native";
import Moods from "../components/oldNote/Moods";
import Note from "../components/oldNote/Note";
import CustomButton from "../components/postNote/CustomButton";
import { useNavigation, useRoute } from '@react-navigation/native';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useState } from "react";

const OldNoteScreen = ({ setEdit, edit, setDel, del }) => {
    const navigation = useNavigation();
    const route = useRoute();
    // route parameters from CustomCalendar/CalendarScreen
    const {note, mood, dayPressed, pressed} = route.params || {};
    
    const [noteState, setNoteState] = useState(note);
    const [moodState, setMoodState] = useState(mood);

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

    const handleDeleteButton = async () => {
        await deleteDoc(doc(db, "notes", dayPressed));
        navigation.goBack();
        setDel(!del);
    }
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAwareScrollView style={styles.container}>
                <Text style={styles.text}>{dayPressed}</Text>
                <Moods setMoodState={setMoodState} moodState={moodState} pressed={pressed} />
                <Note noteState={noteState} setNoteState={setNoteState} />
                <View style={styles.buttons}>
                    {/* Go Back Button */}
                    <CustomButton title="DELETE" onPress={handleDeleteButton} />
                    {/* Edit Button */}
                    <CustomButton title="EDIT" onPress={handleEditPress} />
                </View>
            </KeyboardAwareScrollView>
        </TouchableWithoutFeedback>
    )
}

export default OldNoteScreen;

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