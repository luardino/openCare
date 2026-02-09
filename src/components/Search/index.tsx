import { TextInput, View } from "react-native";
import { styles } from "./style";
import { SearchNormal1 as SearchIcon } from "iconsax-react-native";


export function Search() {
    return (
        <View style={styles.container}>
            <SearchIcon size={20} color="#9aa4b2" style={styles.icon} />
            <TextInput
                style={styles.input}
                placeholder="Search doctor or health issue"
                placeholderTextColor="#9aa4b2"
            />
        </View>
    );
}
