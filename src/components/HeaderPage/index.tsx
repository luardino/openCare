import { colors, fontFamily } from "@/theme";
import { Image, Text, View } from "react-native";
import { styles } from "./style";

type Props = {
    greating: string;
    userName: string;
    avatar?: string;
};

export function HeaderPage({ greating, userName, avatar }: Props) {
    const userInitial = userName?.trim()?.charAt(0)?.toUpperCase() || "?";

    return (
        <View style={styles.container}>
            <View style={styles.textBlock}>
                <Text style={{ fontSize: 14, color: colors.secundary, fontFamily: fontFamily.regular }}>{greating}</Text>
                <Text style={{ fontSize: 20, color: colors.black, fontFamily: fontFamily.bold }}>{userName}</Text>
            </View>

            <View style={styles.avatarWrapper}>
                {avatar ? (
                    <Image source={{ uri: avatar }} style={styles.avatarImage} />
                ) : (
                    <View style={[styles.avatarImage, styles.avatarPlaceholder]}>
                        <Text style={styles.avatarInitial}>{userInitial}</Text>
                    </View>
                )}
            </View>
        </View>
    );
}
