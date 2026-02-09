import { HeaderCard } from "@/components/HeaderCard";
import { HeaderPage } from "@/components/HeaderPage";
import { Search } from "@/components/Search";



import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
    return (
        <SafeAreaView style={{ flex: 1 }} edges={["top", "left", "right"]}>
            <View style={{ flex: 1, paddingHorizontal: 24, paddingTop: 20 }}>
                <HeaderPage greating="Hello," userName="Luardino" />
                <HeaderCard />
                <Search />
            </View>
        </SafeAreaView>
    );
}
