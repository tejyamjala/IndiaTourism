import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { ScreenContainer } from "@/components/screen-container";
import { AppHeader, LabelPill, PhaseStateCard, SectionTitle } from "@/components/indivya";
import { indivyaColors, indivyaRadii, indivyaSpacing, indivyaTypography } from "@/constants/app-theme";

export default function ExploreScreen() {
  return (
    <ScreenContainer className="px-5 pt-3">
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <AppHeader eyebrow="The map is opening" title="Explore India" />
        <View style={styles.searchStub} accessibilityRole="button" accessibilityLabel="Destination search planned for a later phase">
          <MaterialIcons name="search" size={21} color={indivyaColors.muted} />
          <Text style={styles.searchText}>Search destinations later</Text>
          <LabelPill label="Planned" tone="sand" />
        </View>
        <View style={styles.filters}>
          {['Coast', 'Mountains', 'Heritage'].map((label, index) => <LabelPill key={label} label={label} tone={index === 0 ? "terracotta" : index === 1 ? "sage" : "sand"} />)}
        </View>
        <SectionTitle title="A thoughtful starting point" />
        <PhaseStateCard
          title="Destination discovery comes next"
          body="Search, category filters, destination imagery, verified details, and nearby recommendations will be added in Phase 3 and later."
        />
        <View style={styles.quote}>
          <Text style={styles.quoteMark}>“</Text>
          <Text style={styles.quoteText}>The best routes leave room for wonder.</Text>
          <Text style={styles.quoteCaption}>INDIVYA design principle</Text>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  content: { gap: indivyaSpacing.xl, paddingBottom: indivyaSpacing.xxxl },
  searchStub: { alignItems: "center", backgroundColor: indivyaColors.paper, borderColor: indivyaColors.line, borderRadius: indivyaRadii.md, borderWidth: 1, flexDirection: "row", gap: 10, minHeight: 56, paddingHorizontal: indivyaSpacing.lg },
  searchText: { color: indivyaColors.muted, flex: 1, fontFamily: indivyaTypography.sans, fontSize: 13 },
  filters: { flexDirection: "row", gap: 8 },
  quote: { backgroundColor: indivyaColors.ink, borderRadius: indivyaRadii.md, padding: indivyaSpacing.xl },
  quoteMark: { color: indivyaColors.saffron, fontFamily: indivyaTypography.display, fontSize: 48, height: 43, lineHeight: 55 },
  quoteText: { color: indivyaColors.paper, fontFamily: indivyaTypography.display, fontSize: 22, fontWeight: "700", lineHeight: 29, maxWidth: 270 },
  quoteCaption: { color: "#AAB7C8", fontFamily: indivyaTypography.sans, fontSize: 10, fontWeight: "700", letterSpacing: 1, marginTop: indivyaSpacing.lg, textTransform: "uppercase" },
});
