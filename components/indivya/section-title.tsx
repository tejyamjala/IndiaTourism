import { Pressable, StyleSheet, Text, View } from "react-native";
import { indivyaColors, indivyaSpacing, indivyaTypography } from "@/constants/app-theme";

export function SectionTitle({
  title,
  action,
  onAction,
}: {
  title: string;
  action?: string;
  onAction?: () => void;
}) {
  return (
    <View style={styles.row}>
      <Text style={styles.title}>{title}</Text>
      {action && onAction ? (
        <Pressable accessibilityRole="button" accessibilityLabel={action} hitSlop={8} onPress={onAction}>
          <Text style={styles.action}>{action}</Text>
        </Pressable>
      ) : null}
    </View>
  );
}

export function LabelPill({ label, tone = "sand" }: { label: string; tone?: "sand" | "terracotta" | "sage" }) {
  const toneStyle = tone === "terracotta" ? styles.terracotta : tone === "sage" ? styles.sage : styles.sand;
  const textStyle = tone === "terracotta" ? styles.terracottaText : tone === "sage" ? styles.sageText : styles.sandText;
  return (
    <View style={[styles.pill, toneStyle]}>
      <Text style={[styles.pillText, textStyle]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", marginBottom: indivyaSpacing.md },
  title: { color: indivyaColors.ink, fontFamily: indivyaTypography.sans, fontSize: 17, fontWeight: "800" },
  action: { color: indivyaColors.terracotta, fontFamily: indivyaTypography.sans, fontSize: 12, fontWeight: "800" },
  pill: { alignSelf: "flex-start", borderRadius: 999, paddingHorizontal: 10, paddingVertical: 6 },
  pillText: { fontFamily: indivyaTypography.sans, fontSize: 10, fontWeight: "800", letterSpacing: 0.8, textTransform: "uppercase" },
  sand: { backgroundColor: "#EEE5D7" },
  sandText: { color: indivyaColors.inkSoft },
  terracotta: { backgroundColor: "#F7E0D7" },
  terracottaText: { color: indivyaColors.terracotta },
  sage: { backgroundColor: "#E5EEE5" },
  sageText: { color: indivyaColors.success },
});
