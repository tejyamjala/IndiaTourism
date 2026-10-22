import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { ScreenContainer } from "@/components/screen-container";
import { AppHeader, PhaseStateCard, SectionTitle } from "@/components/indivya";
import { indivyaColors, indivyaRadii, indivyaSpacing, indivyaTypography } from "@/constants/app-theme";

export default function ProfileScreen() {
  return (
    <ScreenContainer className="px-5 pt-3">
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <AppHeader eyebrow="A companion in progress" title="Profile" />
        <View style={styles.profileCard}>
          <View style={styles.avatar}><Text style={styles.avatarText}>I</Text></View>
          <View style={styles.profileCopy}>
            <Text style={styles.profileTitle}>Your INDIVYA space</Text>
            <Text style={styles.profileBody}>Personalization will begin after authentication is added.</Text>
          </View>
          <MaterialIcons name="lock-outline" size={20} color={indivyaColors.saffron} />
        </View>
        <SectionTitle title="Settings and preferences" />
        <PhaseStateCard title="Account and language are planned" body="Secure authentication, language selection, saved preferences, and user-owned data are intentionally reserved for Phase 2." />
        <View style={styles.securityNote}>
          <MaterialIcons name="shield" size={19} color={indivyaColors.success} />
          <Text style={styles.securityText}>No password or private credential is collected by this Phase 1 shell.</Text>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  content: { gap: indivyaSpacing.xl, paddingBottom: indivyaSpacing.xxxl },
  profileCard: { alignItems: "center", backgroundColor: indivyaColors.ink, borderRadius: indivyaRadii.lg, flexDirection: "row", gap: 14, padding: indivyaSpacing.xl },
  avatar: { alignItems: "center", backgroundColor: indivyaColors.saffron, borderRadius: 25, height: 50, justifyContent: "center", width: 50 },
  avatarText: { color: indivyaColors.ink, fontFamily: indivyaTypography.display, fontSize: 25, fontWeight: "700" },
  profileCopy: { flex: 1, gap: 5 },
  profileTitle: { color: indivyaColors.paper, fontFamily: indivyaTypography.sans, fontSize: 16, fontWeight: "800" },
  profileBody: { color: "#C7D1DE", fontFamily: indivyaTypography.sans, fontSize: 12, lineHeight: 18 },
  securityNote: { alignItems: "center", backgroundColor: "#E8F0E8", borderRadius: indivyaRadii.sm, flexDirection: "row", gap: 10, padding: indivyaSpacing.md },
  securityText: { color: indivyaColors.success, flex: 1, fontFamily: indivyaTypography.sans, fontSize: 11, fontWeight: "700", lineHeight: 16 },
});
