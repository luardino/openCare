import { Tabs } from "expo-router";
import type { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Home2, Profile, Calendar2, Message } from "iconsax-react-native";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "@/theme/colors";
import { Inter_400Regular, Inter_500Medium, Inter_700Bold, useFonts } from "@expo-google-fonts/inter";
import { Loading } from "@/components/Loading";

type TabRouteName = "index" | "schedule/index" | "chat/index" | "profile/index";

const TAB_META: Record<
    TabRouteName,
    {
        label: string;
        Icon: typeof Home2;
    }> = {
    index: { label: "Home", Icon: Home2 },
    "schedule/index": { label: "Schedule", Icon: Calendar2 },
    "chat/index": { label: "Messages", Icon: Message },
    "profile/index": { label: "Profile", Icon: Profile },
};

    function CustomTabBar({ state, descriptors, navigation, insets }: BottomTabBarProps) {
        return (
        <View style={[styles.tabBarContainer, { paddingBottom: Math.max(insets.bottom, 8) }]}>
            {state.routes.map((route, index) => {
                const isFocused = state.index === index;
                const routeName = route.name as TabRouteName;
                const meta = TAB_META[routeName];

                if (!meta) {
                    return null;
                }

                const { Icon, label } = meta;
                const color = isFocused ? colors.primary : colors.secundary;
                const { options } = descriptors[route.key];

                const onPress = () => {
                    const event = navigation.emit({
                        type: "tabPress",
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, route.params);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: "tabLongPress",
                        target: route.key,
                    });
                };

                return (
                    <Pressable
                        key={route.key}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarButtonTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={[
                            styles.tabItem,
                            isFocused ? styles.tabItemActive : styles.tabItemInactive,
                            { flex: isFocused ? 1.8 : 1 },
                        ]}
                    >
                        <Icon color={color} size={20} variant={isFocused ? "Bold" : "Linear"} />
                        {isFocused && (
                            <Text numberOfLines={1} style={[styles.tabLabel, { color }]}>
                                {label}
                            </Text>
                        )}
                    </Pressable>
                );
            })}
        </View>
    );
}

export default function Layout() {
    const [fontsLoaded] = useFonts({
        Inter_400Regular,
        Inter_500Medium,
        Inter_700Bold,
    });

    if (!fontsLoaded) {
        return <Loading />;
    }

    return (
        <Tabs
            tabBar={(props) => <CustomTabBar {...props} />}
            screenOptions={{
                headerShown: false,
            }}
        >
            <Tabs.Screen name="index" options={{ title: "Home" }} />
            <Tabs.Screen name="schedule/index" options={{ title: "Schedule" }} />
            <Tabs.Screen name="chat/index" options={{ title: "Messages" }} />
            <Tabs.Screen name="profile/index" options={{ title: "Profile" }} />
        </Tabs>
    );
}

const styles = StyleSheet.create({
    tabBarContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingTop: 8,
        paddingHorizontal: 8,
        backgroundColor: colors.background,
        borderTopWidth: 1,
        borderTopColor: colors.gray[600],
    },
    tabItem: {
        minHeight: 44,
        borderRadius: 12,
        marginHorizontal: 4,
        paddingHorizontal: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    tabItemActive: {
        backgroundColor: colors.primarySurface,
    },
    tabItemInactive: {
        backgroundColor: "transparent",
    },
    tabLabel: {
        marginLeft: 8,
        fontSize: 12,
        fontFamily: "Inter_700Bold",
        flexShrink: 1,
    },
});
