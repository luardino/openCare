import { Tabs } from "expo-router";
import { Home2, Profile, Calendar2, Message } from "iconsax-react-native"

import { Inter_400Regular ,Inter_500Medium, Inter_700Bold, useFonts } from "@expo-google-fonts/inter";
import { Loading } from "@/components/Loading";

export default function Layout() {

    const [fontsLoaded] = useFonts({
        Inter_400Regular,
        Inter_500Medium,
        Inter_700Bold
    });

    if (!fontsLoaded) {
        return <Loading />;
    }

    return (
        <Tabs screenOptions={{ headerShown: false }}>
            <Tabs.Screen
                name="index"
                options={{ title: "Home", tabBarIcon: ({ color, size }) => <Home2 color={color} size={size} variant="Linear"/> }}
            />
            <Tabs.Screen
                name="schedule/index"
                options={{ title: "Schedule", tabBarIcon: ({ color, size }) => <Calendar2 color={color} size={size} variant="Linear"/> }}
            />
            <Tabs.Screen
                name="chat/index"
                options={{ title: "Messages", tabBarIcon: ({ color, size }) => <Message color={color} size={size} variant="Linear"/> }}
            />
            <Tabs.Screen
                name="profile/index"
                options={{ title: "Profile", tabBarIcon: ({ color, size }) => <Profile color={color} size={size} variant="Linear"/> }}
            />
        </Tabs>
    );
}
