import { BackButton } from '@/components/back-button';
import { FeaturedCollections } from '@/components/brand/featured-collections';
import { HeroHeader } from '@/components/brand/hero-header';
import { NewArrival } from '@/components/brand/new-arrival';
import { useLocalSearchParams } from "expo-router";
import {
    ScrollView,
    StyleSheet,
    Text
} from "react-native";
import { brands } from "../../constants/brands";

export default function BrandDetailScreen() {
    const { brand } = useLocalSearchParams<{ brand: string }>();
    const bikes = brands.find(b => b.name === brand)?.bikes || [];
    const item = brands.find(b => b.name === brand);

    return (
        <ScrollView style={styles.container}>
            {/* back button */}
            <BackButton />

            {/* hero header */}
            <HeroHeader item={item} />

            {/* featured collections */}
            <Text style={styles.sectionTitle}>FEATURED COLLECTIONS</Text>
            <FeaturedCollections bikes={bikes} />
            <NewArrival bikes={bikes} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#fff" },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginVertical: 16,
        marginLeft: 16
    }
});
