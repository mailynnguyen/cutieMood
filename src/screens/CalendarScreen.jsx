import { ScrollView } from "react-native";
import Key from "../components/calendar/Key";
import CustomCalendar from "../components/calendar/CustomCalendar";

const CalendarScreen = ({ done, edit }) => {
    return (
        <ScrollView style={{ flexDirection: "column", backgroundColor: "#F7EEE2", height: "100%" }}>
            <CustomCalendar done={done} edit={edit}/>
            <Key />
        </ScrollView>
    )
}

export default CalendarScreen;