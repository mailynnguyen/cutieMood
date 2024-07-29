import { Calendar, CalendarList } from 'react-native-calendars';
import { doc, collection, getDocs, getDoc } from "firebase/firestore";
import { db } from "../../../firebase.config";
import { useState, useEffect } from 'react';
import { moods } from '../../data/moods';
import { colors } from '../../data/colors';
import { useNavigation } from '@react-navigation/native';

const CustomCalendar = ({ done, edit }) => {
    const navigation = useNavigation();

    const [markedDates, setMarkedDates] = useState({});
    const [pressed, setPressed] = useState(false);

    const handleDayPressed = async (day) => {
        setPressed(!pressed);
        const docID = day.dateString;
        const docRef = doc(db, "notes", docID)
        const docSnapshot = await getDoc(docRef);

        if (docSnapshot.exists()) {
            navigation.navigate("getnote", {
                note: docSnapshot.data().note,
                mood: docSnapshot.data().mood, 
                dayPressed: docID,
                pressed: pressed,
            });
        } else {
            console.log("No such document!")
        }
    }

    useEffect(() => {
       // Get documents in "notes" collection
        const fetchNotes = async () => {
            const customDates = {};
            const docRef = collection(db, "notes");
            const querySnapshot = await getDocs(docRef);
            querySnapshot.forEach((doc) => {
                // doc.id format --> "year-month-date"
                moods.forEach((mood, index) => {
                    if (doc.data().mood === mood) {
                        customDates[doc.id] = { customStyles: { container: { backgroundColor: colors[index], borderRadius: "10%"}, text: { color: "white" }}}
                    }
                })
            });
            setMarkedDates({...markedDates, ...customDates});
        }
        fetchNotes();
    }, [done, edit]);

    return (
        <CalendarList 
            style={{
                marginTop: "16%",
            }}
            markingType={"custom"}
            markedDates={markedDates}
            horizontal={true} 
            pagingEnabled={true}
            futureScrollRange={0}
            onDayPress={(day) => handleDayPressed(day)}
            theme={{
                calendarBackground: "transparent",
                backgroundColor: "transparent",
                "stylesheet.calendar.main": {
                    week: {
                        marginVertical: 4,
                        flexDirection: "row",
                        justifyContent: "space-around",
                    },
                },
                "stylesheet.calendar.header": {
                    dayHeader: {
                        color: "#685D79",
                        fontFamily: "Gaegu-Bold",
                        fontSize: 25,
                        marginBottom: "2%",
                    },
                    monthText: {
                        fontFamily: "Gaegu-Bold",
                        fontSize: 50,
                        color: "#685D79",
                        marginBottom: "12%",
                    },
                },
                "stylesheet.day.basic": {
                    base: {
                        backgroundColor: "#D9D9D9",
                        width: "90%",
                        height: 0,
                        paddingTop: "90%",
                        borderRadius: "10%",
                        alignItems: "center",
                        justifyContent: "center",
                    },
                    todayText: {
                        color: "green",
                        position: "absolute",
                    },
                    text: {
                        position: "absolute",
                        fontFamily: "ABeeZee-Reg",
                        fontSize: 18,
                    },
                }
            }}
        >
            <Calendar />
        </CalendarList>
    )
}

export default CustomCalendar;