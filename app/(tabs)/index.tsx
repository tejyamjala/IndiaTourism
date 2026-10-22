import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { ScreenContainer } from "@/components/screen-container";
import { AppHeader, JourneyCard, LabelPill, SectionTitle } from "@/components/indivya";
import { indivyaColors, indivyaElevation, indivyaRadii, indivyaSpacing, indivyaTypography } from "@/constants/app-theme";
export default function HomeScreen() {
  return (
    <ScreenContainer safeAreaClassName="bg-background" className="px-5 pt-3">
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <AppHeader eyebrow="Your India, your pace" title="Take the scenic route." showBrand />
        <View style={styles.hero}>
          <View style={styles.heroGlow} />
          <View style={styles.heroTopRow}>
            <LabelPill label="Phase 1 foundation" tone="terracotta" />
            <MaterialIcons name="north-east" size={22} color={indivyaColors.saffron} />
          </View>
          <Text style={styles.heroTitle}>Every journey starts with a feeling.</Text>
          <Text style={styles.heroBody}>INDIVYA is being shaped for thoughtful travel across India — from first spark to final stop.</Text>
          <View style={styles.routeGraphic}>
            <View style={styles.routePath} />
            <View style={[styles.routePin, styles.pinOne]} />
            <View style={[styles.routePin, styles.pinTwo]} />
            <View style={[styles.routePin, styles.pinThree]} />
            <Text style={styles.routeCaption}>A considered way forward</Text>
          </View>
        </View>
        <View style={styles.section}>
          <SectionTitle title="Begin with a direction" />
          <JourneyCard icon="explore" eyebrow="Discover" title="Find your next chapter" body="Browse India with a little more intention." />
          <View style={styles.cardGap} />
          <JourneyCard icon="map" eyebrow="Shape a trip" title="Keep the route open" body="Trip planning arrives in a later phase." />
        </View>
        <View style={styles.note}>
          <MaterialIcons name="verified-user" size={18} color={indivyaColors.success} />
          <Text style={styles.noteText}>This foundation uses no live travel data or fabricated availability.</Text>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  content: { gap: indivyaSpacing.xl, paddingBottom: indivyaSpacing.xxxl },
  hero: { backgroundColor: indivyaColors.ink, borderRadius: indivyaRadii.lg, minHeight: 278, overflow: "hidden", padding: indivyaSpacing.xl, position: "relative", ...indivyaElevation.card },
  heroGlow: { backgroundColor: "#36506F", borderRadius: 140, height: 220, opacity: 0.5, position: "absolute", right: -70, top: -75, width: 220 },
  heroTopRow: { alignItems: "center", flexDirection: "row", justifyContent: "space-between" },
  heroTitle: { color: indivyaColors.paper, fontFamily: indivyaTypography.display, fontSize: 29, fontWeight: "700", lineHeight: 35, marginTop: indivyaSpacing.xl, maxWidth: 265 },
  heroBody: { color: "#C7D1DE", fontFamily: indivyaTypography.sans, fontSize: 13, lineHeight: 20, marginTop: indivyaSpacing.md, maxWidth: 285 },
  routeGraphic: { bottom: 13, height: 55, left: 18, position: "absolute", right: 18 },
  routePath: { borderColor: indivyaColors.terracotta, borderTopWidth: 2, height: 45, left: 4, position: "absolute", top: 16, transform: [{ rotate: "-7deg" }], width: "88%" },
  routePin: { backgroundColor: indivyaColors.saffron, borderColor: indivyaColors.ink, borderRadius: 6, borderWidth: 2, height: 12, position: "absolute", width: 12 },
  pinOne: { left: 18, top: 26 }, pinTwo: { left: "47%", top: 15 }, pinThree: { right: 5, top: 8 },
  routeCaption: { bottom: 0, color: "#AAB7C8", fontFamily: indivyaTypography.sans, fontSize: 10, fontWeight: "700", letterSpacing: 0.6, position: "absolute", right: 0, textTransform: "uppercase" },
  section: { gap: 0 },
  cardGap: { height: indivyaSpacing.md },
  note: { alignItems: "center", backgroundColor: "#E8F0E8", borderRadius: indivyaRadii.sm, flexDirection: "row", gap: 9, paddingHorizontal: indivyaSpacing.md, paddingVertical: 11 },
  noteText: { color: indivyaColors.success, flex: 1, fontFamily: indivyaTypography.sans, fontSize: 11, fontWeight: "700", lineHeight: 16 },
});
