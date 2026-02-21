import { HeaderCard } from "@/components/HeaderCard";
import { HeaderPage } from "@/components/HeaderPage";
import { RoundedIcon } from "@/components/RoundedIcon";
import { Search } from "@/components/Search";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
    return (
        <SafeAreaView style={styles.safeArea} edges={["top", "left", "right"]}>
            <View style={styles.container}>
                <HeaderPage greating="Hello," userName="Luardino" />
                <HeaderCard />
                <Search />
                <RoundedIcon />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 20,
    },
});
