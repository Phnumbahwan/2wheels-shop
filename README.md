# 2Wheels Shop

A cross-platform motorcycle showroom built with Expo and React Native. This project showcases featured collections, new arrivals, and detailed brand pages using a modern component-based approach.

## Table of Contents

- [Getting Started](#getting-started)
- [Code Structure](#code-structure)
- [Features](#features)
- [UI Image Showcase](#ui-image-showcase)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Expo CLI](https://docs.expo.dev/workflow/expo-cli/) installed globally:  
  ```sh
  npm install -g expo-cli
  ```

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/2wheels.shop.git
   cd 2wheels.shop
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the Expo development server:
   ```sh
   npx expo start
   ```

## Code Structure

```
.
├── .gitignore
├── app
│   ├── _layout.tsx          // Main layout using [Stack](app/_layout.tsx)
│   ├── index.tsx            // Entry point; redirects to brands
│   ├── modal.tsx            // Sample modal screen
│   └── brands
│       ├── index.tsx        // Brand listing screen ([BrandDetailScreen](app/brands/[brand].tsx))
│       └── [brand].tsx      // Detailed brand view using components like [NewArrival](components/brand/new-arrival.tsx), [HeroHeader](components/brand/hero-header.tsx) etc.
├── assets                   // Images and media files used for brands, bikes and icons
├── components
│   ├── brand
│   │   ├── featured-collections.tsx
│   │   ├── hero-header.tsx
│   │   └── new-arrival.tsx  // New arrivals list ([NewArrival](components/brand/new-arrival.tsx))
│   ├── ui
│   │   ├── icon-symbol.tsx
│   │   └── collapsible.tsx
│   ├── themed-text.tsx
│   ├── themed-view.tsx
│   ├── back-button.tsx
│   ├── external-link.tsx
│   └── haptic-tab.tsx
├── constants
│   ├── brands.ts            // Bikes, brand info, specifications, pricing etc.
│   └── theme.ts             // Theme colors and fonts
├── hooks
│   └── use-theme-color.ts   // Custom hook for theming
├── scripts                  // Utilities such as project reset ([reset-project.js](scripts/reset-project.js))
├── tsconfig.json
├── package.json
└── README.md
```

## Features

- **Brand Listing and Details:** Quickly navigate between brands. See the featured collection and new arrivals with detailed bike specifications in [constants/brands.ts](constants/brands.ts).
- **Theming:** Custom theming using light/dark modes in [use-theme-color](hooks/use-theme-color.ts) and [theme.ts](constants/theme.ts).
- **Responsive UI:** Built with React Native components such as [`ThemedView`](components/themed-view.tsx) and [`ThemedText`](components/themed-text.tsx).
- **Animations:** Parallax scrolling in listings via [ParallaxScrollView](components/parallax-scroll-view.tsx).
- **Haptic Feedback:** Provides soft haptic feedback on tab presses with [HapticTab](components/haptic-tab.tsx).

## UI Image Showcase

This section highlights some of the key UI components and screens of the application.

### Brands Display Screen
<img width="425" height="936" alt="IMG_0100" src="https://github.com/user-attachments/assets/1c570bff-451c-4476-a875-346edd45f5b6" />

### Brand Details
<img width="425" height="936" alt="IMG_0101" src="https://github.com/user-attachments/assets/82908bab-6172-4060-8e94-441815833198" />

<img width="425" height="936" alt="IMG_0102" src="https://github.com/user-attachments/assets/6148c9ca-baaf-4969-885f-d5644f584e0b" />

*Note: Replace the image paths above with the actual paths to your images located in your project.*

## Scripts

- **Start Development Server:**
  ```sh
  npx expo start
  ```
- **Reset Project:**
  ```sh
  npm run reset-project
  ```

## Contributing

Contributions are welcome. Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or fix.
3. Make your changes and commit them.
4. Create a pull request explaining your changes.

## License

Distributed under the MIT License. See [LICENSE](LICENSE) for more information.

---

*This documentation provides an overview of the project. For more details, refer to the individual file comments and documentation generated using tools like [TypeDoc](https://typedoc.org/).*
