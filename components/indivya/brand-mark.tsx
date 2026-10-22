import { StyleSheet, Text, View } from "react-native";
import { indivyaColors, indivyaTypography } from "@/constants/app-theme";

export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <View style={styles.row} accessible accessibilityLabel="INDIVYA brand">
      <View style={[styles.mark, compact && styles.markCompact]}>
        <View style={styles.sun} />
        <View style={styles.route} />
        <View style={styles.routeDot} />
      </View>
      <Text style={[styles.wordmark, compact && styles.wordmarkCompact]}>INDIVYA</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { alignItems: "center", flexDirection: "row", gap: 10 },
  mark: {
    backgroundColor: indivyaColors.terracotta,
    borderRadius: 14,
    height: 38,
    overflow: "hidden",
    position: "relative",
    width: 38,
  },
  markCompact: { borderRadius: 11, height: 30, width: 30 },
  sun: {
    backgroundColor: indivyaColors.saffron,
    borderRadius: 20,
    height: 18,
    left: 10,
    position: "absolute",
    top: 6,
    width: 18,
  },
  route: {
    borderColor: indivyaColors.paper,
    borderRadius: 30,
    borderTopWidth: 2,
    height: 32,
    left: -3,
    position: "absolute",
    top: 20,
    transform: [{ rotate: "-24deg" }],
    width: 48,
  },
  routeDot: {
    backgroundColor: indivyaColors.paper,
    borderRadius: 4,
    bottom: 6,
    height: 7,
    position: "absolute",
    right: 7,
    width: 7,
  },
  wordmark: {
    color: indivyaColors.ink,
    fontFamily: indivyaTypography.sans,
    fontSize: 17,
    fontWeight: "800",
    letterSpacing: 3,
  },
  wordmarkCompact: { fontSize: 14, letterSpacing: 2.2 },
});
