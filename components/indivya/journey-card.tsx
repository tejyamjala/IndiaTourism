import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { indivyaColors, indivyaElevation, indivyaRadii, indivyaSpacing, indivyaTypography } from "@/constants/app-theme";

export function JourneyCard({
  icon,
  eyebrow,
  title,
  body,
  onPress,
}: {
  icon: keyof typeof MaterialIcons.glyphMap;
  eyebrow: string;
  title: string;
  body: string;
  onPress?: () => void;
}) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`${title}. ${body}`}
      disabled={!onPress}
      onPress={onPress}
      style={({ pressed }) => [styles.card, pressed && styles.pressed]}
    >
      <View style={styles.iconWrap}>
        <MaterialIcons name={icon} size={22} color={indivyaColors.saffron} />
      </View>
      <View style={styles.copy}>
        <Text style={styles.eyebrow}>{eyebrow}</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.body}>{body}</Text>
      </View>
      <MaterialIcons name="north-east" size={18} color={indivyaColors.terracotta} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: { alignItems: "center", backgroundColor: indivyaColors.paper, borderColor: indivyaColors.line, borderRadius: indivyaRadii.md, borderWidth: 1, flexDirection: "row", gap: indivyaSpacing.md, padding: indivyaSpacing.lg, ...indivyaElevation.card },
  iconWrap: { alignItems: "center", backgroundColor: indivyaColors.ink, borderRadius: 14, height: 46, justifyContent: "center", width: 46 },
  copy: { flex: 1, gap: 3 },
  eyebrow: { color: indivyaColors.terracotta, fontFamily: indivyaTypography.sans, fontSize: 10, fontWeight: "800", letterSpacing: 1, textTransform: "uppercase" },
  title: { color: indivyaColors.ink, fontFamily: indivyaTypography.sans, fontSize: 16, fontWeight: "800" },
  body: { color: indivyaColors.muted, fontFamily: indivyaTypography.sans, fontSize: 12, lineHeight: 17 },
  pressed: { opacity: 0.72, transform: [{ scale: 0.99 }] },
});
