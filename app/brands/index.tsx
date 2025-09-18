import { useRouter } from "expo-router";
import React, { memo, useCallback } from "react";
import { FlatList, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { brands } from "../../constants/brands";

interface Brand {
    name: string;
    image: any;
}

const BrandCard = memo(({ item }: { item: Brand }) => (
    <View style={styles.card}>
        <ImageBackground
            source={item.image}
            style={styles.image}
            imageStyle={styles.imageStyle}
        >
            <View style={styles.overlay}>
                <Text style={styles.title}>{item.name}</Text>
            </View>
        </ImageBackground>
    </View>
));

export default function BrandScreen() {
    const router = useRouter();
    const renderBrand = useCallback(
        ({ item }: { item: Brand }) => (
            <TouchableOpacity onPress={() => router.push(`/brands/${item.name}`)}>
                <BrandCard item={item} />
            </TouchableOpacity>
        ),
        [router]
    );

    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1, backgroundColor: '#f1f1f1' }}>
                <FlatList
                    data={brands}
                    renderItem={renderBrand}
                    keyExtractor={item => item.name}
                />
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    card: {
        marginVertical: 5,
        marginHorizontal: 16,
        height: 200,
        borderRadius: 10,
        overflow: "hidden",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.5)", // Shadow for iOS
        elevation: 3, // Shadow for Android
    },
    image: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    imageStyle: {
        resizeMode: "cover",
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        color: "#fff",
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
    },
});
