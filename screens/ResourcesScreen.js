import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ResourcesScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Resources</Text>

            <View style={styles.resourcesContainer}>
                <View style={styles.resourceWrapper}>
                    <Text style={styles.subHeader}>Suicide and Crisis Lifeline</Text>
                    <Text style={styles.description}>24/7 support via call or text, contact 989</Text>
                    <View style={styles.line}></View>
                </View>
                <View style={styles.resourceWrapper}>
                    <Text style={styles.subHeader}>Crisis Text Line</Text>
                    <Text style={styles.description}>24/7 support via text, text HOME to 741741</Text>
                    <View style={styles.line}></View>
                </View>
                <View style={styles.resourceWrapper}>
                    <Text style={styles.subHeader}>Substance Abuse and Mental Health Services Administration</Text>
                    <Text style={styles.description}>helpline and treatment locator for mental health and substance abuse support</Text>
                    <View style={styles.line}></View>
                </View>
                <View style={styles.resourceWrapper}>
                    <Text style={styles.subHeader}>National Alliance on Mental Illness (NAMI)</Text>
                    <Text style={styles.description}>provides info, support groups, and advocacy for individuals and families</Text>
                    <View style={styles.line}></View>
                </View>
            </View>
        </View>


    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F7EEE2',
        height: 900,
        width: 700,
        paddingHorizontal: 55

    },
    title: {
        marginTop: 100,
        width: 300,
        fontFamily: 'Gaegu-Bold',
        color: '#AB6C82',
        fontSize: 50,
    },
    resourcesContainer: {
        marginTop: 20

    },
    resourceWrapper: {
        width: 300
    },
    subHeader: {
        fontFamily: 'Gaegu-Bold',
        fontSize: 24,
        color: '#475C7A',
        marginBottom: 6
    },
    description: {
        fontFamily: 'Gaegu-Bold',
        color: '#475C7A',
        fontSize: 16,
        marginBottom: 10
    },
    line: {
        backgroundColor: '#685D79',
        height: 0.5,
        width: 300,
        marginBottom: 10
    }


})

export default ResourcesScreen;