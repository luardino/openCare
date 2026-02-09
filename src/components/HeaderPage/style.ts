import { colors, fontFamily } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    }
    ,
    textBlock: {
        alignItems: "flex-start",
        gap: 4,
    },
    avatarWrapper: {

    },
    avatarImage: {
        width: 56,
        height: 56,
        borderRadius: 28,
    },
    avatarPlaceholder: {
        backgroundColor: colors.primarySurface,
        alignItems: "center",
        justifyContent: "center",
    },
    avatarInitial: {
        color: colors.primary,
        fontFamily: fontFamily.bold,
        fontSize: 24,
    },
});
