import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { ScreenContainer } from "@/components/screen-container";
import { AppHeader, PhaseStateCard, SectionTitle } from "@/components/indivya";
import { indivyaColors, indivyaRadii, indivyaSpacing, indivyaTypography } from "@/constants/app-theme";

export default function TripsScreen() {
  return (
    <ScreenContainer className="px-5 pt-3">
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <AppHeader eyebrow="Your route, when ready" title="Trips" />
        <View style={styles.intro}>
          <View style={styles.iconCircle}><MaterialIcons name="route" size={24} color={indivyaColors.saffron} /></View>
          <Text style={styles.introTitle}>A blank page can be a beginning.</Text>
          <Text style={styles.introBody}>Your saved journeys will live here once trip planning is implemented.</Text>
        </View>
        <SectionTitle title="Planned journeys" />
        <PhaseStateCard tone="empty" title="No trips yet" body="Trip creation, daily itineraries, travel pace, and transparent budgets are planned for Phase 5." />
        <View style={styles.steps}>
          {['Choose a direction', 'Set the pace', 'Shape each day'].map((step, index) => (
            <View key={step} style={styles.step}>
              <View style={styles.stepNumber}><Text style={styles.stepNumberText}>{index + 1}</Text></View>
              <Text style={styles.stepText}>{step}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  content: { gap: indivyaSpacing.xl, paddingBottom: indivyaSpacing.xxxl },
  intro: { backgroundColor: indivyaColors.ink, borderRadius: indivyaRadii.lg, padding: indivyaSpacing.xl },
  iconCircle: { alignItems: "center", backgroundColor: "#36506F", borderRadius: 18, height: 48, justifyContent: "center", width: 48 },
  introTitle: { color: indivyaColors.paper, fontFamily: indivyaTypography.display, fontSize: 24, fontWeight: "700", lineHeight: 30, marginTop: indivyaSpacing.lg },
  introBody: { color: "#C7D1DE", fontFamily: indivyaTypography.sans, fontSize: 13, lineHeight: 20, marginTop: 8 },
  steps: { gap: 12 },
  step: { alignItems: "center", flexDirection: "row", gap: 12 },
  stepNumber: { alignItems: "center", borderColor: indivyaColors.terracotta, borderRadius: 15, borderWidth: 1, height: 30, justifyContent: "center", width: 30 },
  stepNumberText: { color: indivyaColors.terracotta, fontFamily: indivyaTypography.sans, fontSize: 12, fontWeight: "800" },
  stepText: { color: indivyaColors.inkSoft, fontFamily: indivyaTypography.sans, fontSize: 13, fontWeight: "700" },
});
