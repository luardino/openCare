import { useMemo, useRef, useState, type ComponentType } from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import {
    CATEGORY_ITEM_SPACING,
    CATEGORY_ITEM_WIDTH,
    styles,
} from "./style";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/theme";

type CategoryIconProps = {
    size: number;
    color: string;
};

type CategoryIcon = ComponentType<CategoryIconProps>;

type CategoryItemProps = {
    label: string;
    Icon: CategoryIcon;
    onPress?: () => void;
};

type Category = CategoryItemProps;
const CATEGORY_SNAP_INTERVAL = CATEGORY_ITEM_WIDTH + CATEGORY_ITEM_SPACING;
const ARROW_VISIBILITY_THRESHOLD = 4;

const MedicalServicesIcon: CategoryIcon = (props) => (
    <MaterialIcons name="medical-services" {...props} />
);
const FavoriteIcon: CategoryIcon = (props) => (
    <MaterialIcons name="favorite" {...props} />
);
const HospitalIcon: CategoryIcon = (props) => (
    <MaterialIcons name="local-hospital" {...props} />
);
const MedicationIcon: CategoryIcon = (props) => (
    <MaterialIcons name="medication" {...props} />
);
const VaccinesIcon: CategoryIcon = (props) => (
    <MaterialIcons name="vaccines" {...props} />
);
const HeartMonitorIcon: CategoryIcon = (props) => (
    <MaterialIcons name="monitor-heart" {...props} />
);
const PsychologyIcon: CategoryIcon = (props) => (
    <MaterialIcons name="psychology" {...props} />
);
const ChildCareIcon: CategoryIcon = (props) => (
    <MaterialIcons name="child-care" {...props} />
);

export const categories: Category[] = [
    { label: "General", Icon: MedicalServicesIcon },
    { label: "Cardiology", Icon: FavoriteIcon },
    { label: "Hospital", Icon: HospitalIcon },
    { label: "Pharmacy", Icon: MedicationIcon },
    { label: "Vaccines", Icon: VaccinesIcon },
    { label: "Vitals", Icon: HeartMonitorIcon },
    { label: "Mental", Icon: PsychologyIcon },
    { label: "Pediatrics", Icon: ChildCareIcon },
];

export function CategoryItem({ label, Icon, onPress }: CategoryItemProps) {
    return (
        <View style={styles.item}>
            <Pressable
                onPress={onPress}
                style={({ pressed }) => [styles.itemPressable, pressed && styles.itemPressed]}
            >
                <View style={styles.iconCircle}>
                    <Icon size={26} color={colors.primary} />
                </View>
                <Text style={styles.label}>{label}</Text>
            </Pressable>
        </View>
    );
}

export function RoundedIcon() {
    const listRef = useRef<FlatList<Category>>(null);
    const [scrollOffset, setScrollOffset] = useState(0);
    const [contentWidth, setContentWidth] = useState(0);
    const [listWidth, setListWidth] = useState(0);

    const maxScrollOffset = useMemo(
        () => Math.max(contentWidth - listWidth, 0),
        [contentWidth, listWidth]
    );
    const canScroll = maxScrollOffset > ARROW_VISIBILITY_THRESHOLD;
    const showLeftArrow = canScroll && scrollOffset > ARROW_VISIBILITY_THRESHOLD;
    const showRightArrow =
        canScroll && scrollOffset < maxScrollOffset - ARROW_VISIBILITY_THRESHOLD;
    const scrollByArrow = (direction: "left" | "right") => {
        const delta = direction === "right" ? CATEGORY_SNAP_INTERVAL : -CATEGORY_SNAP_INTERVAL;
        const nextOffset = Math.max(
            0,
            Math.min(scrollOffset + delta, maxScrollOffset)
        );
        listRef.current?.scrollToOffset({ offset: nextOffset, animated: true });
    };

    return (
        <View style={styles.container}>
            <FlatList
                ref={listRef}
                data={categories}
                horizontal
                keyExtractor={(item) => item.label}
                renderItem={({ item }) => (
                    <CategoryItem
                        label={item.label}
                        Icon={item.Icon}
                        onPress={item.onPress}
                    />
                )}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.listContent}
                decelerationRate="fast"
                snapToAlignment="start"
                snapToInterval={CATEGORY_SNAP_INTERVAL}
                bounces={false}
                onLayout={({ nativeEvent }) => {
                    setListWidth(nativeEvent.layout.width);
                }}
                onContentSizeChange={(width) => {
                    setContentWidth(width);
                }}
                onScroll={({ nativeEvent }) => {
                    setScrollOffset(nativeEvent.contentOffset.x);
                }}
                scrollEventThrottle={16}
            />
            {showLeftArrow && (
                <View style={[styles.scrollHint, styles.leftHint]}>
                    <Pressable
                        onPress={() => scrollByArrow("left")}
                        style={({ pressed }) => [
                            styles.arrowBadge,
                            pressed && styles.arrowPressed,
                        ]}
                    >
                        <MaterialIcons
                            name="keyboard-arrow-left"
                            size={18}
                            color={colors.muted}
                        />
                    </Pressable>
                </View>
            )}
            {showRightArrow && (
                <View style={[styles.scrollHint, styles.rightHint]}>
                    <Pressable
                        onPress={() => scrollByArrow("right")}
                        style={({ pressed }) => [
                            styles.arrowBadge,
                            pressed && styles.arrowPressed,
                        ]}
                    >
                        <MaterialIcons
                            name="keyboard-arrow-right"
                            size={18}
                            color={colors.muted}
                        />
                    </Pressable>
                </View>
            )}
        </View>
    );
}
