import { FlatList, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SeeMoreIcon } from "../see-more-icon";

export const FeaturedCollections: React.FC<{ bikes: any[]; }> = ({
    bikes
}) => {
    return (
        <>
            <FlatList
                data={bikes}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={f => f.model}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.featuredCard}>
                        <ImageBackground
                            source={item.image}
                            style={styles.featuredImage}
                            imageStyle={styles.imageStyle}
                        >
                            <View style={styles.overlay}>
                                <Text style={styles.featuredTitle}>{item.model}</Text>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                )}
                contentContainerStyle={styles.listContainer}
                ListFooterComponent={<SeeMoreIcon />}
            />
        </>
    );
}

const styles = StyleSheet.create({
    imageStyle: {
        resizeMode: "cover"
    },
    featuredCard: {
        marginRight: 12,
        width: 140,
        height: 180,
        borderRadius: 10,
        overflow: "hidden"
    },
    featuredImage: {
        flex: 1,
        justifyContent: "flex-end"
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "rgba(0,0,0,0.4)",
        justifyContent: "center",
        alignItems: "center"
    },
    featuredTitle: {
        color: "#fff",
        position: "absolute",
        bottom: 10,
        left: 10,
        fontWeight: "bold"
    },
    listContainer: {
        paddingLeft: 16,
        paddingRight: 8,
        paddingBottom: 16
    }
});