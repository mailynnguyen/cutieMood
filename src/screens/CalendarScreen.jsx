import { ScrollView } from "react-native";
import Key from "../components/calendar/Key";
import CustomCalendar from "../components/calendar/CustomCalendar";
import GetNoteScreen from "./GetNoteScreen";

const CalendarScreen = ({ navigation, done }) => {
    return (
        <ScrollView style={{ flexDirection: "column", backgroundColor: "#F7EEE2", height: "100%" }}>
            <CustomCalendar navigate={() => navigation.navigate("GetNoteScreen")} done={done} />
            <Key />
        </ScrollView>
    )
}

export default CalendarScreen;