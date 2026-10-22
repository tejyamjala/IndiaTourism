import { Platform } from "react-native";

export const indivyaColors = {
  ink: "#172B4D",
  inkSoft: "#36506F",
  sand: "#F7F1E7",
  paper: "#FFFCF8",
  line: "#DED4C5",
  terracotta: "#C86B4A",
  saffron: "#E8A44C",
  sage: "#7E9682",
  white: "#FFFFFF",
  muted: "#718097",
  mutedLight: "#A4AFBE",
  error: "#B8584B",
  success: "#557A62",
} as const;

export const indivyaSpacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
  xxxl: 44,
} as const;

export const indivyaRadii = {
  sm: 12,
  md: 18,
  lg: 26,
  pill: 999,
} as const;

export const indivyaTypography = {
  display: Platform.select({ ios: "Georgia", android: "serif", default: "serif" }) ?? "serif",
  sans: Platform.select({ ios: "System", android: "sans-serif", default: "sans-serif" }) ?? "sans-serif",
};

export const indivyaElevation = {
  card: {
    shadowColor: indivyaColors.ink,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.08,
    shadowRadius: 18,
    elevation: 3,
  },
} as const;
