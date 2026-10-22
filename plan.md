# INDIVYA Phase 1 Plan

## Implementation approach

INDIVYA Phase 1 establishes a genuine Expo Router / React Native / TypeScript Android foundation. The starter's Expo Router tree remains the navigation boundary, while app-specific screens, components, and design tokens are added in small modules. The app intentionally uses local presentation data only in this phase: no authentication, live travel data, weather, maps, wishlist persistence, trip generation, or AI calls are presented as working features.

The shell uses a five-tab bottom navigation layout, safe-area-aware screen containers, accessible touch targets, and consistent loading/empty/error/placeholder states. Future services can be added behind `services/` and typed models behind `data/` without changing the navigation contract.

## Project structure

- `app/`: Expo Router routes and navigation layouts.
- `app/(tabs)/`: the five Phase 1 tab screens and tab navigator.
- `components/`: reusable visual primitives such as the brand mark, app header, section headings, feature cards, and phase-state cards.
- `constants/`: app-level design tokens and theme exports.
- `hooks/`: existing platform hooks plus future state hooks.
- `lib/`: existing runtime adapters and theme provider; future service clients belong here or in `services/`.
- `assets/images/`: native launcher, splash, and favicon assets.
- `plan.md` and `TODO.md`: implementation decisions and outcome status.
- `.env.example`: names and descriptions for future public configuration; no secrets.

## Design direction

Three possible directions were considered: Desert Modernism (0.07), Monsoon Editorial (0.06), and **Indigo Journey (0.08)**. Indigo Journey is selected.

### Design Movement

Indigo Journey blends Indian craft geometry with quiet editorial travel journals: calm, cinematic, tactile, and premium without becoming ornamental.

### Core Principles

1. **A grounded welcome:** warm sand surfaces and indigo ink create a calm base for future travel imagery.
2. **One meaningful action:** cards and buttons use generous spacing and clear hierarchy for one-handed use.
3. **Craft in the details:** terracotta accents, fine borders, and small route markers hint at Indian textiles and maps.
4. **Honest progress:** future features are labelled as planned rather than simulated.

### Color Philosophy

Deep indigo is the ownable anchor: it suggests night trains, inked maps, and dependable guidance. Sand keeps the canvas warm and travel-journal-like, while terracotta provides a human, sunlit accent. Sage is reserved for calm progress states.

### Layout Paradigm

A scrollable journal layout: the app header establishes the current chapter, content is grouped into editorial sections, and cards are stacked with asymmetric accent marks rather than dense grids.

### Signature Elements

- A small terracotta route dot and line used as a recurring journey motif.
- Rounded cards with a soft sand fill and indigo outline.
- The INDIVYA wordmark paired with a simple sun-and-route brand mark.

### Interaction Philosophy

Tap targets are large, labeled, and predictable. Buttons provide immediate visual feedback but never imply an unavailable backend action. Placeholder interactions are explicit and non-destructive.

### Animation

Phase 1 uses restrained native press feedback only. Future cinematic transitions should be slow, atmospheric, and reduced-motion aware; no looping video or heavy animation is included in this foundation pass.

### Typography System

Use the platform sans family for controls and body copy, with a serif display style for the wordmark and major editorial headings where the platform supports it. Hierarchy uses clear size jumps, medium-to-bold weights, and short line lengths for portrait Android screens.

### Brand Essence

A thoughtful India travel companion for curious explorers who want a more personal journey, not a generic booking grid. Personality: grounded, curious, considered.

### Brand Voice

Headlines are warm and directional; CTAs are specific and honest. Example lines: “Take the scenic route.” and “Your next chapter is still taking shape.”

### Wordmark & Logo

The mark is a small rising sun intersected by a curved route line, followed by the INDIVYA wordmark. The icon is built as a square launcher asset with no baked-in rounded corners so Android can apply its own mask.

### Signature Brand Color

Indigo Journey: `#172B4D`.

## Phase boundary

Phase 1 is complete only when the app shell, five working routes, reusable visual language, Android-friendly safe-area layout, environment scaffolding, and setup documentation are present and type-checkable. Later integrations remain open in `TODO.md`.
