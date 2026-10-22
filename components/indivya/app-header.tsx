import { StyleSheet, Text, View } from "react-native";
import { indivyaColors, indivyaSpacing, indivyaTypography } from "@/constants/app-theme";
import { BrandMark } from "./brand-mark";

export function AppHeader({
  eyebrow,
  title,
  showBrand = false,
}: {
  eyebrow?: string;
  title: string;
  showBrand?: boolean;
}) {
  return (
    <View style={styles.header}>
      <View style={styles.copy}>
        {showBrand ? <BrandMark compact /> : eyebrow ? <Text style={styles.eyebrow}>{eyebrow}</Text> : null}
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.routeBadge} accessibilityLabel="Current journey marker">
        <View style={styles.routeLine} />
        <View style={styles.routeDot} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: "flex-end",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: indivyaSpacing.xl,
  },
  copy: { flex: 1, gap: 6 },
  eyebrow: {
    color: indivyaColors.terracotta,
    fontFamily: indivyaTypography.sans,
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 1.6,
    textTransform: "uppercase",
  },
  title: {
    color: indivyaColors.ink,
    fontFamily: indivyaTypography.display,
    fontSize: 31,
    fontWeight: "700",
    letterSpacing: -0.5,
  },
  routeBadge: {
    alignItems: "center",
    backgroundColor: indivyaColors.paper,
    borderColor: indivyaColors.line,
    borderRadius: 18,
    borderWidth: 1,
    height: 44,
    justifyContent: "center",
    marginLeft: indivyaSpacing.md,
    width: 44,
  },
  routeLine: {
    borderColor: indivyaColors.terracotta,
    borderTopWidth: 2,
    height: 20,
    transform: [{ rotate: "-42deg" }],
    width: 22,
  },
  routeDot: {
    backgroundColor: indivyaColors.terracotta,
    borderColor: indivyaColors.paper,
    borderRadius: 5,
    borderWidth: 2,
    height: 10,
    position: "absolute",
    right: 7,
    top: 8,
    width: 10,
  },
});
