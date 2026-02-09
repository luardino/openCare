import { Image, Pressable, Text, View } from "react-native";
import { styles } from "./style";
import { ArrowRight2, Calendar2, Clock } from "iconsax-react-native";
import { colors } from "@/theme";

export function HeaderCard() {
    return (
        <View style={styles.container}>
            <View style={styles.topRow}>
                <View style={styles.leftContent}>
                    <Image source={require("../../../assets/images/luardino.png")} style={styles.profileCard} />
                    <View style={styles.textContent}>
                        <Text style={styles.professionalName}>Dr. Luardino Jaime</Text>
                        <Text style={styles.profession}>Cardiologist</Text>
                    </View>
                </View>

                <Pressable onPress={() => {}} style={styles.button}>
                    <ArrowRight2 size={20} color={colors.white} variant="Linear" />
                </Pressable>
            </View>

            <View style={styles.downRow}>
                <View style={styles.metaItem}>
                    <Calendar2 size={18} color={colors.white} variant="Linear" />
                    <Text style={styles.metaText}>Friday, 19 June</Text>
                </View>
                
                <View style={styles.metaItem}>
                    <Clock size={18} color={colors.white} variant="Linear" />
                    <Text style={styles.metaText}>11:00 - 12:00 AM</Text>
                </View>
            </View>
        </View>
    );
}
