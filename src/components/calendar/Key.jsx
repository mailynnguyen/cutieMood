import { View, Text, StyleSheet } from "react-native";
import { moods } from "../../data/moods";
import { colors } from "../../data/colors";

const Key = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>mood key:</Text>
            {moods.map((mood, index) => (
                <View key={index} style={{ flexDirection: "row" }}>
                    <View style={[styles.colors, { backgroundColor: colors[index] }]}></View>
                    <Text style={[styles.keys, { color: colors[index]}]}>{mood}</Text>
                </View>
            ))}
        </View>
    )
}

export default Key;

const styles = StyleSheet.create({
    container: {
        width: "70%", 
        marginLeft: "10%", 
        marginVertical: "10%",
    },
    title: {
        color: "#685D79", 
        fontFamily: "Gaegu-Bold", 
        fontSize: 18, 
        marginBottom: "8%",
    },
    colors: { 
        height: 25, 
        width: 25, 
        borderRadius: 5, 
        marginRight: 8, 
        marginBottom: 8 
    },
    keys: {
        fontFamily: "Gaegu-Bold", 
        fontSize: 18,
    },
})