import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { ScreenContainer } from "@/components/screen-container";
import { AppHeader, PhaseStateCard, SectionTitle } from "@/components/indivya";
import { indivyaColors, indivyaSpacing, indivyaTypography } from "@/constants/app-theme";

export default function WishlistScreen() {
  return (
    <ScreenContainer className="px-5 pt-3">
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <AppHeader eyebrow="Keep the feeling close" title="Wishlist" />
        <View style={styles.illustration}>
          <MaterialIcons name="favorite-border" size={42} color={indivyaColors.terracotta} />
          <View style={styles.dots}><View style={styles.dot} /><View style={styles.dot} /><View style={styles.dot} /></View>
        </View>
        <SectionTitle title="Saved places" />
        <PhaseStateCard tone="empty" title="Your wishlist is waiting" body="Save destinations for later once Explore and user-owned persistence arrive in a later phase." />
        <Text style={styles.helper}>Nothing is stored or synced in Phase 1.</Text>
      </ScrollView>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  content: { gap: indivyaSpacing.xl, paddingBottom: indivyaSpacing.xxxl },
  illustration: { alignItems: "center", backgroundColor: "#F7E0D7", borderRadius: 26, height: 166, justifyContent: "center" },
  dots: { flexDirection: "row", gap: 9, marginTop: 16 },
  dot: { backgroundColor: indivyaColors.terracotta, borderRadius: 3, height: 6, opacity: 0.6, width: 6 },
  helper: { color: indivyaColors.muted, fontFamily: indivyaTypography.sans, fontSize: 12, textAlign: "center" },
});
