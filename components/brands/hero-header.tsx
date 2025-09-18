import React from "react";
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const HeroHeader: React.FC<{ item: any }> = ({ item }) => {
    return (
        <ImageBackground
            source={item?.image}
            style={styles.headerImage}
            imageStyle={styles.imageStyle}
        >
            <View style={styles.headerOverlay}>
                <Text style={styles.headerTitle}>{item?.name}</Text>
                <Text style={styles.headerSubtitle}>
                    All eyes will be on you in our signature best-sellers
                </Text>
                <TouchableOpacity style={styles.headerButton}>
                    <Text style={styles.headerButtonText}>TRY NOW</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    headerImage: {
        height: 500,
        justifyContent: "flex-end",
    },
    imageStyle: {
        resizeMode: "cover"
    },
    headerOverlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "rgba(0,0,0,0.4)",
        justifyContent: "flex-end",
        padding: 20
    },
    headerTitle: {
        color: "#fff",
        fontSize: 32,
        fontWeight: "bold"
    },
    headerSubtitle: {
        color: "#fff",
        fontSize: 16,
        marginVertical: 12
    },
    headerButton: {
        backgroundColor: "rgba(255,255,255,0.4)",
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 20,
        alignSelf: "flex-start"
    },
    headerButtonText: {
        color: "#fff",
        fontWeight: "bold"
    },
});