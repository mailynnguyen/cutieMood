import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase.config";
import { StyleSheet, View, Keyboard, Text, TouchableWithoutFeedback } from "react-native";
import Moods from "../components/postNote/Moods";
import Note from "../components/postNote/Note";
import CustomButton from "../components/postNote/CustomButton";
import { useNavigation, useRoute } from '@react-navigation/native';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useState } from "react";

const NewNoteScreen = ({ setDone, done }) => {
    const navigation = useNavigation();
    const route = useRoute();
    // route parameters from CustomCalendar/CalendarScreen
    const {dayPressed} = route.params || {};
    
    const [note, setNote] = useState("");
    const [mood, setMood] = useState("");

    const handlePress = async () => {
        try {
            const docRef = doc(db, "notes", dayPressed);
            // save doc
            await setDoc(docRef, {
                note: note,
                mood: mood,
            });
            setDone(!done);
            navigation.goBack();
        } catch (error) {
            console.log("Error adding document: ", error);
        }
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAwareScrollView style={styles.container}>
                <Text style={styles.text}>{dayPressed}</Text>
                <Moods setMood={setMood} />
                <Note setNote={setNote} />
                <View style={styles.buttons}>
                    {/* Go Back Button */}
                    <CustomButton title="GO BACK" onPress={() => navigation.goBack()} />
                    {/* Edit Button */}
                    <CustomButton title="DONE" onPress={handlePress} />
                </View>
            </KeyboardAwareScrollView>
        </TouchableWithoutFeedback>
    )
}

export default NewNoteScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#AB6C82",
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