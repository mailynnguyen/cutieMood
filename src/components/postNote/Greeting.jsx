import { View, StyleSheet, Text } from "react-native";

const Greeting = () => {
    return (
        <View style={styles.container}>
                <Text style={styles.text}>Hi,</Text>
                <Text style={styles.text}>How was your day?</Text>
            </View>
    )
}

export default Greeting;

const styles = StyleSheet.create({
    container: {
        marginTop: "15%",
        paddingLeft: "10%",
    },
    text: {
        color: "white",
        fontFamily: "Gaegu-Bold",
        fontSize: 32,
    }
})