import { View, Text, StyleSheet, TextInput } from "react-native";

const Note = ({ note }) => {
    return (
        <View style={styles.container}>
            <View style={styles.notepad}>
                <Text style={styles.title}>NOTE</Text>
                <TextInput
                    placeholder="type here..."
                    autoCorrect={false}
                    multiline
                    scrollEnabled={false}
                    allowFontScaling
                    style={styles.text}
                    value={note}
                >
                </TextInput>
            </View> 
        </View>  
    )
}

export default Note;

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        marginVertical: "10%",
    },
    notepad: {
        backgroundColor: "#F7EEE2",
        borderRadius: "30%",
        width: "90%",
        padding: "8%",
        minHeight: "40%",
    },
    title: {
        fontFamily: "Gaegu-Bold",
        color: "#475C7A",
        fontSize: 20,
    },
    text: {
        fontFamily: "Gaegu-Bold",
        color: "#8A8A8A",
        fontSize: 20,
        selectionColor: "#475C7A",
    }
})