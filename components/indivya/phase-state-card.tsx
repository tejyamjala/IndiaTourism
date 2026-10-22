import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { indivyaColors, indivyaElevation, indivyaRadii, indivyaSpacing, indivyaTypography } from "@/constants/app-theme";

type StateTone = "planned" | "empty" | "error";

const toneConfig: Record<StateTone, { icon: keyof typeof MaterialIcons.glyphMap; label: string; color: string; background: string }> = {
  planned: { icon: "auto-awesome", label: "Coming in a later phase", color: indivyaColors.terracotta, background: "#FFF4EE" },
  empty: { icon: "bookmark-border", label: "Nothing saved yet", color: indivyaColors.inkSoft, background: indivyaColors.paper },
  error: { icon: "cloud-off", label: "Unavailable right now", color: indivyaColors.error, background: "#FFF2EF" },
};

export function PhaseStateCard({
  tone = "planned",
  title,
  body,
  actionLabel,
  onAction,
}: {
  tone?: StateTone;
  title: string;
  body: string;
  actionLabel?: string;
  onAction?: () => void;
}) {
  const config = toneConfig[tone];
  return (
    <View style={[styles.card, { backgroundColor: config.background }]}>
      <View style={[styles.iconWrap, { backgroundColor: config.color }]}>
        <MaterialIcons name={config.icon} size={18} color={indivyaColors.paper} />
      </View>
      <View style={styles.content}>
        <Text style={[styles.label, { color: config.color }]}>{config.label}</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.body}>{body}</Text>
        {actionLabel && onAction ? (
          <Pressable
            accessibilityRole="button"
            accessibilityLabel={actionLabel}
            onPress={onAction}
            style={({ pressed }) => [styles.action, pressed && styles.pressed]}
          >
            <Text style={styles.actionText}>{actionLabel}</Text>
            <MaterialIcons name="arrow-forward" size={16} color={indivyaColors.terracotta} />
          </Pressable>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { borderRadius: indivyaRadii.md, flexDirection: "row", gap: indivyaSpacing.md, padding: indivyaSpacing.lg, ...indivyaElevation.card },
  iconWrap: { alignItems: "center", borderRadius: 12, height: 34, justifyContent: "center", width: 34 },
  content: { flex: 1, gap: 5 },
  label: { fontFamily: indivyaTypography.sans, fontSize: 10, fontWeight: "800", letterSpacing: 0.8, textTransform: "uppercase" },
  title: { color: indivyaColors.ink, fontFamily: indivyaTypography.sans, fontSize: 16, fontWeight: "800" },
  body: { color: indivyaColors.muted, fontFamily: indivyaTypography.sans, fontSize: 13, lineHeight: 19 },
  action: { alignItems: "center", flexDirection: "row", gap: 6, marginTop: 7 },
  actionText: { color: indivyaColors.terracotta, fontFamily: indivyaTypography.sans, fontSize: 12, fontWeight: "800" },
  pressed: { opacity: 0.65 },
});
