import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

export const SeeMoreIcon: React.FC = () => {
    return (
        <TouchableOpacity style={styles.container} accessibilityLabel="See more" accessibilityRole="button">
            <AntDesign name="arrow-right" size={18} color="#000" />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#e0e0e0",
        borderRadius: 20,
        width: 40,
        height: 40,
        margin: "auto",
        alignItems: "center",
        justifyContent: "center",
    },
});