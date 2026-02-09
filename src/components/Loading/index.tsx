import { View, ActivityIndicator } from "react-native";
import { styles } from "./style";
import { colors } from "@/theme/colors";

export function Loading() {
    return (
        <View style={styles.container} >
            <ActivityIndicator size="large" color={colors.secundary} />
        </View>
    );
}