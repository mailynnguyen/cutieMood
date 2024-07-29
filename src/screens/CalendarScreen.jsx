import { ScrollView } from "react-native";
import Key from "../components/calendar/Key";
import CustomCalendar from "../components/calendar/CustomCalendar";
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from "react";

const CalendarScreen = ({ done }) => {
    const navigation = useNavigation();

    const [pressed, setPressed] = useState(false);
    const [note, setNote] = useState("");
    const [mood, setMood] = useState("");
    const [dayPressed, setDayPressed] = useState("");
    
    if (pressed === true) {
        setPressed(false);
        navigation.navigate("getnote", {
            note: note,
            mood: mood, 
            dayPressed: dayPressed,
        });
    };

    return (
        <ScrollView style={{ flexDirection: "column", backgroundColor: "#F7EEE2", height: "100%" }}>
            <CustomCalendar 
                setPressed={setPressed} 
                setNote={setNote}
                setMood={setMood}
                setDayPressed={setDayPressed}
                done={done} 
            />
            <Key />
        </ScrollView>
    )
}

export default CalendarScreen;