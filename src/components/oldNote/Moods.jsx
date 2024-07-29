"use client";
import React, { useState, useEffect } from "react";
import { View, TouchableWithoutFeedback, Text, Image, StyleSheet } from "react-native";
import { moodImagesGray, moodImagesOrange } from "../../data/note/moodImages";
import { moods } from "../../data/moods";
import { colors } from "../../data/colors";

const Moods = ({ pressed, setMoodState, moodState }) => {
    const [selectedMoodIndex, setSelectedMoodIndex] = useState(-1);
    const [fontColor, setFontColor] = useState("");
    const [moodText, setMoodText] = useState("");

    const handlePress = (index) => {
        setSelectedMoodIndex(index);
        setMoodText(moods[index]);
        setFontColor(colors[index]);
        setMoodState(moods[index])
    }

    useEffect(() => {
        moods.forEach((moodEach, index) => {
            if (moodEach === moodState) {
                setSelectedMoodIndex(index);
                setFontColor(colors[index]);  
                setMoodText(moods[index]);
            }
        }) 
    }, [pressed]);

    return (
        <View style={styles.container}>
            <View style={styles.background}>
                <View style={styles.moodContainer}>
                    {moodImagesGray.map((moodImage, index) => (
                            <TouchableWithoutFeedback key={index} onPress={() => handlePress(index)}>
                                <Image source={selectedMoodIndex !== index ? moodImage : moodImagesOrange[index]} style={styles.image} />
                            </TouchableWithoutFeedback>
                        ))}
                </View>
                <View style={styles.line}>
                    <Text style={[styles.text, { color: fontColor }]}>{moodText}</Text>
                </View>
                
            </View>
        </View>        
    )
}

export default Moods;

const styles = StyleSheet.create({
    container: {
        marginTop: "10%",
        flexDirection: "row",
        justifyContent: "center",
        width: "100%",
    },
    background: {
        backgroundColor: "#F7EEE2",
        borderRadius: "30%",
        flexDirection: "column",
        alignItems: "center",
        width: "90%",
    },
    moodContainer: {
        flexDirection: "row",
        marginVertical: "5%",
    },
    image: {
        height: "undefined",
        width: "18%",
        aspectRatio: "168/246",
    },
    line: {
        width: "80%",
        borderTopColor: "685D79",
        borderTopWidth: 1,
        justifyContent: "center",
        height: "100%",
        width: "90%",
        height: "undefined",
        aspectRatio: "100/20",
    },
    text: {
        fontFamily: "Gaegu-Bold",
        fontSize: 20,
        textAlign: "center",
    }
})