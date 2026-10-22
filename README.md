# INDIVYA — India Travel Companion

INDIVYA is a genuine Android mobile application built with Expo, React Native, TypeScript, and Expo Router. It is designed as a premium India-focused travel companion for destination discovery, itinerary planning, and transparent travel budgeting.

## Current status: Phase 1

Phase 1 establishes the mobile foundation only:

- A working Expo Router mobile shell with five bottom tabs: Home, Explore, Trips, Wishlist, and Profile.
- A reusable INDIVYA design system with indigo, sand, terracotta, and sage tokens; spacing; typography; radii; elevation; and accessible touch targets.
- Safe-area-aware layouts for Android portrait screens.
- Clear loading, empty, error, and planned-feature placeholder components.
- Android app configuration, native branding assets, and future environment-variable scaffolding.

The current screens are intentionally honest placeholders. Authentication, cinematic login animation, language localization, live destination content, wishlist persistence, trip planning, budgets, weather, maps, restaurants, hotels, saved trips, and AI assistance are **not implemented in Phase 1**.

## Prerequisites

- Node.js 20 or newer (Node 22 is supported).
- pnpm 9 or newer (`corepack enable` can activate the repository package manager).
- Android Studio with an Android SDK, an emulator, and `adb`, or a physical Android phone with Developer Options and USB debugging enabled.
- Expo Go on a physical phone for a development-session preview, or an Android emulator for local native testing.

## Install

```bash
corepack enable
pnpm install
```

Create a local environment file only if you need future integration values:

```bash
cp .env.example .env.local
```

Do not put secrets in `.env.local`, `app.config.ts`, or any client-side file. Private credentials belong on a secure backend and are not required for Phase 1.

## Start Expo

Start the Metro/Expo development server:

```bash
pnpm dev:metro
```

The fixed development port is `8081`. Keep the terminal running while using Expo Go or an Android emulator.

For the complete starter runtime, including the future API server:

```bash
pnpm dev
```

The Phase 1 UI does not require the API server. The starter reserves port `3000` for later backend work.

## Run on Android

### Android emulator

1. Start an Android Virtual Device from Android Studio's Device Manager.
2. Confirm the emulator is visible with `adb devices`.
3. Start Expo with `pnpm dev:metro`.
4. In a second terminal, run:

```bash
pnpm android
```

Alternatively, press `a` in the Expo terminal when an emulator is available.

### Physical Android phone

1. Install Expo Go from Google Play and sign in if Expo prompts for an account.
2. Connect the phone and development computer to the same network, or use the Expo tunnel option when local networking is unavailable.
3. Start `pnpm dev:metro` and scan the Expo QR code from Expo Go.
4. For a local native run instead, enable USB debugging and run `pnpm android` after confirming `adb devices` lists the phone.

Expo Web is useful for quick layout checks, but it does not replace Android verification for this project.

## Useful commands

```bash
pnpm check      # TypeScript check
pnpm lint       # Expo ESLint check
pnpm test       # Vitest suite when tests are added
pnpm format     # Prettier formatting
pnpm db:push    # Starter database migration command for later phases
```

## Project structure

```text
app/
  _layout.tsx              Root providers and safe-area setup
  (tabs)/_layout.tsx       Five-tab Expo Router navigation
  (tabs)/index.tsx         Home screen
  (tabs)/explore.tsx       Explore placeholder
  (tabs)/trips.tsx         Trips placeholder
  (tabs)/wishlist.tsx      Wishlist placeholder
  (tabs)/profile.tsx       Profile placeholder
components/
  indivya/                  Reusable brand, header, card, state, and control components
  screen-container.tsx      Safe-area-aware shared screen wrapper
constants/
  app-theme.ts              INDIVYA design tokens
  theme.ts                  Starter theme bridge
assets/images/              Android icon, splash, favicon, and brand assets
hooks/                      Reusable platform/theme hooks
lib/                        Starter runtime adapters and providers
server/                     Starter API foundation reserved for later phases
plan.md                     Phase 1 implementation and design plan
TODO.md                     Outcome checklist with later-phase boundaries
.env.example               Safe configuration names only
```

## Phase 1 implementation notes

- Tab buttons are real Expo Router routes and use native React Native components.
- Empty and planned states are reusable and labelled so later integrations are not implied.
- No real user data, passwords, API keys, weather, map locations, prices, reviews, availability, bookings, or AI responses are fabricated.
- The project keeps the generated Android application identifier and managed Expo runtime configuration from the starter. Release APK/AAB builds should be created through the configured Expo/Android build workflow after the app has completed later verification phases.

See [`plan.md`](./plan.md) and [`TODO.md`](./TODO.md) for the implementation plan and remaining work.
