import React from "react";
import {
    FlatList,
    ImageBackground,
    StyleSheet,
    Text,
    View
} from "react-native";

interface Bike {
    id: string;
    model: string;
    image: any;
    price: string;
}

export const NewArrival: React.FC<{ bikes: Bike[] }> = ({ bikes }) => {
    return (
        <View>
            <Text style={styles.sectionTitle}>New Arrivals</Text>
            <FlatList
                data={bikes}
                numColumns={2}
                keyExtractor={item => item.model}
                columnWrapperStyle={styles.row}
                scrollEnabled={false}
                contentContainerStyle={styles.listContainer}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <View>
                            <ImageBackground
                                source={item.image}
                                style={styles.image}
                                imageStyle={styles.imageStyle}
                            />
                        </View>
                        <View style={styles.info}>
                            <Text style={styles.name}>{item.model}</Text>
                            <Text style={styles.price}>{item.price}</Text>
                        </View>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    sectionTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginVertical: 16,
        marginLeft: 16
    },
    row: {
        gap: 10,
        marginHorizontal: 16,
        marginVertical: 3,
        marginBottom: 16
    },
    listContainer: {
        paddingBottom: 16
    },
    card: {
        flex: 1,
        backgroundColor: "#fff"
    },
    image: {
        width: "100%",
        height: 120,
    },
    imageStyle: {
        resizeMode: "cover",
        borderRadius: 12,
        boxShadow: "5px 5px 8px -2px rgba(0,0,0,0.4)",
        elevation: 2
    },
    info: {
        padding: 10
    },
    name: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 4
    },
    price: {
        fontSize: 14,
        color: "#a41b1bff"
    }
});