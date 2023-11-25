import React from 'react';
import { View, Text, StyleSheet } from 'react-native';



const CalendarScreen = () => {

    return (
        <View style={styles.container}>
            {/* Month Title */}
            <Text style={styles.title}>November</Text>

            {/* Row */}
            <View style={styles.days}>
                <Text style={styles.day}>Sun</Text>
                <Text style={styles.day}>Mon</Text>
                <Text style={styles.day}>Tue</Text>
                <Text style={styles.day}>Wed</Text>
                <Text style={styles.day}>Thu</Text>
                <Text style={styles.day}>Fri</Text>
                <Text style={styles.day}>Sat</Text>
            </View>

            <View style={styles.gridRow}>
                <View style={styles.box}></View>
                <View style={styles.box}></View>
                <View style={styles.box}></View>
                <View style={styles.box}></View>
                <View style={styles.box}></View>
                <View style={styles.box}></View>
                <View style={styles.box}></View>
            </View>
            
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: 900,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {

    }


})

export default CalendarScreen;