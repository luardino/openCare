import { NativeTabs } from 'expo-router/unstable-native-tabs'

export default function Layout() {
    return (
        <NativeTabs>
            <NativeTabs />
            <NativeTabs />
            <NativeTabs />
        </NativeTabs>
    );
}