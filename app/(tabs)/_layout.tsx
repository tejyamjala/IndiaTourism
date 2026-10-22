import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Tabs } from "expo-router";
import { Platform, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { indivyaColors, indivyaTypography } from "@/constants/app-theme";
import { HapticTab } from "@/components/haptic-tab";

const icons: Record<string, keyof typeof MaterialIcons.glyphMap> = {
  index: "home",
  explore: "explore",
  trips: "route",
  wishlist: "favorite-border",
  profile: "person-outline",
};

export default function TabLayout() {
  const insets = useSafeAreaInsets();
  const bottomPadding = Platform.OS === "web" ? 10 : Math.max(insets.bottom, 10);
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: indivyaColors.terracotta,
        tabBarInactiveTintColor: indivyaColors.muted,
        tabBarButton: HapticTab,
        tabBarHideOnKeyboard: true,
        tabBarLabelStyle: styles.label,
        tabBarStyle: [styles.bar, { height: 62 + bottomPadding, paddingBottom: bottomPadding }],
        tabBarIcon: ({ color, size }) => <MaterialIcons name={icons[route.name] ?? "circle"} color={color} size={size} />,
      })}
    >
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="explore" options={{ title: "Explore" }} />
      <Tabs.Screen name="trips" options={{ title: "Trips" }} />
      <Tabs.Screen name="wishlist" options={{ title: "Wishlist" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  bar: {
    backgroundColor: indivyaColors.paper,
    borderTopColor: indivyaColors.line,
    borderTopWidth: StyleSheet.hairlineWidth,
    paddingTop: 8,
  },
  label: { fontFamily: indivyaTypography.sans, fontSize: 10, fontWeight: "700" },
});
