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
        backgroundColor: colors.inputBg,
        borderWidth: 1,
        borderColor: colors.gray[600],
        borderRadius: 16,
        paddingLeft: 44,
        paddingRight: 16,
        paddingVertical: 12,
        color: colors.text,
        fontSize: 16,
        height: 56,
        shadowColor: "#000",
        shadowOpacity: 0.08,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 4 },
        elevation: 3,
    },
});
