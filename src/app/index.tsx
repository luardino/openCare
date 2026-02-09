import { HeaderPage } from "@/components/HeaderPage";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
    return (
        <SafeAreaView style={{ flex: 1 }} edges={["top", "left", "right"]}>
            <View style={{ flex: 1, paddingHorizontal: 16, paddingTop: 8 }}>
                <HeaderPage greating="Hello," userName="Luardino" />
            </View>
        </SafeAreaView>
    );
}
