import { colors } from "@/theme";
import { StyleSheet } from "react-native";

export const CATEGORY_ITEM_WIDTH = 72;
export const CATEGORY_ITEM_SPACING = 16;

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        marginTop: 24,
        marginBottom: 32,
        position: "relative",
    },
    listContent: {
        paddingRight: CATEGORY_ITEM_SPACING,
    },
    item: {
        width: CATEGORY_ITEM_WIDTH,
        alignItems: "center",
    },
    separator: {
        width: CATEGORY_ITEM_SPACING,
    },
    scrollHint: {
        position: "absolute",
        top: 0,
        bottom: 20,
        justifyContent: "center",
        zIndex: 2,
    },
    leftHint: {
        left: 0,
    },
    rightHint: {
        right: 0,
    },
    arrowBadge: {
        width: 28,
        height: 28,
        borderRadius: 14,
        backgroundColor: colors.background,
        borderWidth: 1,
        borderColor: colors.gray[600],
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOpacity: 0.08,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 4 },
        elevation: 3,
    },
    arrowPressed: {
        opacity: 0.7,
    },
    itemPressable: {
        width: "100%",
        alignItems: "center",
    },
    itemPressed: {
        opacity: 0.7,
    },
    iconCircle: {
        width: 64,
        height: 64,
        borderRadius: 999,
        backgroundColor: colors.inputBg,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOpacity: 0.08,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 4 },
        elevation: 3,
    },
    label: {
        marginTop: 8,
        fontSize: 12,
        color: colors.muted,
        textAlign: "center",
    },
});
