import { colors, fontFamily } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: colors.primary,
        minHeight: 160,
        borderRadius: 16,
        padding: 20,
        marginTop: 32,
        justifyContent: "space-between",
    },
    topRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    leftContent: {
        flexDirection: "row",
        alignItems: "center",
    },
    textContent: {
        marginLeft: 12,
        gap: 4,
    },
    profileCard: {
        width: 48,
        height: 48,
        borderRadius: 32,
    },
    professionalName: {
        fontFamily: fontFamily.bold,
        fontSize: 16,
        color: colors.white,
    },
    profession: {
        fontFamily: fontFamily.regular,
        fontSize: 14,
        color: colors.gray[100],
    },
    button: {
        width: 32,
        height: 32,
        alignItems: "center",
        justifyContent: "center",
    },
    downRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderTopWidth: 1,
        borderTopColor: colors.gray[600],
        paddingTop: 16.5,
    },
    metaItem: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },
    metaText: {
        fontFamily: fontFamily.medium,
        fontSize: 13,
        color: colors.white,
    },
});
