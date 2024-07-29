import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase.config";
import { useState } from "react";
import { StyleSheet, View, Keyboard, TouchableWithoutFeedback } from "react-native";
import Greeting from "../components/postNote/Greeting";
import Moods from "../components/postNote/Moods";
import Note from "../components/postNote/Note";
import CustomButton from "../components/postNote/CustomButton";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';

const PostNoteScreen = ({ setDone, done }) => {
    const navigation = useNavigation();

    const [note, setNote] = useState("");
    const [mood, setMood] = useState("");

    const donePressed = async () => {
        try {
            if (mood === "") {
                Toast.show({ 
                    type: 'moodToast',
                    text1: "please enter a mood",
                });
            } else {
                 // Today's date
                const year = new Date().getFullYear().toString();
                const month = (new Date().getMonth() + 1).toString();
                const monthStr = month < 10 ? "0" + month : month;
                const date = new Date().getDate().toString();
                const today = year + "-" + monthStr + "-" + date;
                // Document reference
                const docRef = doc(db, "notes", today);
                // Add a new doc with a generated id
                await setDoc(docRef, {
                    note: note,
                    mood: mood,
                });
                setDone(!done); // set done and send to CustomCalendar to fetch notes
                navigation.navigate("calendar");
            }
        } catch (error) {
            console.error("Error adding document: ", error);
        } 
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAwareScrollView style={styles.container}>
                <Greeting />
                <Moods setMood={setMood} />
                <Note setNote={setNote} />
                <View style={styles.buttons}>
                    {/* Go Back Button */}
                    <CustomButton title="GO BACK" onPress={() => navigation.goBack()} />
                    {/* Submit Input Button */}
                    <CustomButton title="DONE" onPress={donePressed} />
                </View>
                
            </KeyboardAwareScrollView>
        </TouchableWithoutFeedback>
    )
}

export default PostNoteScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#685D79",
        height: "100%",
    },
    buttons: {
        flexDirection: "row",
        justifyContent: "space-around",
    }
})