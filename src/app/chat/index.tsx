import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Chat() {
    return (
        <SafeAreaView style={{ flex: 1 }} edges={["top", "left", "right"]}>
            <View style={{ flex: 1, paddingHorizontal: 16, paddingTop: 8, justifyContent: "center", alignItems: "center" }}>
                <Text>Chat Page</Text>
                <Text>In Construction</Text>
            </View>
        </SafeAreaView>
    );
}
