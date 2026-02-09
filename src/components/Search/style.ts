import { StyleSheet } from "react-native";
import { colors } from "@/theme";


export const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        width: "100%",
        position: "relative",
        justifyContent: "center",
    },
    icon: {
        position: "absolute",
        left: 14,
        zIndex: 1,
    },
    input: {
        backgroundColor: colors.white,
        borderRadius: 16,
        paddingLeft: 44,
        paddingRight: 16,
        paddingVertical: 12,
        fontSize: 16,
        height: 56,
    },
});
