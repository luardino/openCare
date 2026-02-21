import { TextInput, View } from "react-native";
import { styles } from "./style";
import { SearchNormal1 as SearchIcon } from "iconsax-react-native";
import { colors } from "@/theme";


export function Search() {
    return (
        <View style={styles.container}>
            <SearchIcon size={20} color={colors.muted} style={styles.icon} />
            <TextInput
                style={styles.input}
                placeholder="Search doctor or health issue"
                placeholderTextColor={colors.muted}
            />
        </View>
    );
}
