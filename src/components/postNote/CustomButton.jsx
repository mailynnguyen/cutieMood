import { View, Text, StyleSheet, Pressable } from "react-native";


const CustomButton = ({ onPress, title }) => {
    return (
        <View style={styles.container}>
            <Pressable style={styles.button} onPress={onPress}>
                <Text style={styles.title}>{title}</Text>
            </Pressable>
        </View>
        
    )
}

export default CustomButton;

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        marginTop: "8%",
        marginBottom: "20%",
    },
    button: {
        backgroundColor: "#F7EEE2",
        borderRadius: "22%",
        width: "60%",
        height: "undefined",
        aspectRatio: "100/50",
        justifyContent: "center"
    },
    title: {
        fontFamily: "Gaegu-Bold",
        fontSize: 20,
        color: "#685D79",
        textAlign: "center",
    }
})