# 2Wheels Shop

A cross-platform motorcycle showroom built with Expo and React Native. This project showcases featured collections, new arrivals, and detailed brand pages using a modern component-based approach.

## Table of Contents

- [Getting Started](#getting-started)
- [Code Structure](#code-structure)
- [Features](#features)
- [Sample Data](#sample-data)
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

## Sample Data

Below is an excerpt of the sample data used in the project, defined in [constants/brands.ts](constants/brands.ts):

```typescript
interface brandsType {
    name: string;
    image: any;
    bikes?: {
        model: string;
        image: any;
        description: string;
        price: string; // <-- new
        specifications: {
            engine: string;
            power: string;
            torque: string;
            transmission: string;
            suspension: string;
            brakes: string;
            fuelCapacity: string;
            weight: string;
        };
    }[];
}

export const brands: brandsType[] = [
    {
        name: 'CFMoto',
        image: require('../assets/images/cfmoto/450mt.jpg'),
        bikes: [
            {
                model: 'CFMoto 450MT',
                image: require('../assets/images/cfmoto/450mt.jpg'),
                price: '$5,499', // <-- new
                description: 'The CFMoto 450MT is a versatile adventure motorcycle designed for both on-road and off-road riding. It features a 449cc single-cylinder engine, comfortable ergonomics, and modern technology, making it an excellent choice for riders seeking adventure at an affordable price.',
                specifications: {
                    engine: '449cc, single-cylinder, liquid-cooled',
                    power: '41 hp @ 8,500 rpm',
                    torque: '37 Nm @ 7,000 rpm',
                    transmission: '6-speed manual',
                    suspension: 'Front: Telescopic fork; Rear: Mono-shock',
                    brakes: 'Front: Disc; Rear: Disc with ABS',
                    fuelCapacity: '20 liters',
                    weight: '187 kg (curb weight)',
                },
            },
            {
                model: 'CFMoto 650MT',
                image: require('../assets/images/cfmoto/650mt.jpg'),
                price: '$7,499', // <-- new
                description: 'The CFMoto 650MT is a mid-range adventure motorcycle that combines performance, comfort, and advanced features. It is powered by a 649cc parallel-twin engine and is equipped with modern technology such as a TFT display, LED lighting, and multiple riding modes, making it suitable for long-distance touring and off-road adventures.',
                specifications: {
                    engine: '649cc, parallel-twin, liquid-cooled',
                    power: '60 hp @ 8,750 rpm',
                    torque: '56 Nm @ 7,000 rpm',
                    transmission: '6-speed manual',
                    suspension: 'Front: Upside-down fork; Rear: Mono-shock',
                    brakes: 'Front: Dual disc; Rear: Disc with ABS',
                    fuelCapacity: '20 liters',
                    weight: '205 kg (curb weight)',
                },
            },
            {
                model: 'CFMoto 700CL-X',
                image: require('../assets/images/cfmoto/700clx.webp'),
                price: '$8,999', // <-- new
                description: 'The CFMoto 700CL-X is a modern retro-styled motorcycle that combines classic design elements with contemporary performance. It features a 693cc parallel-twin engine, a lightweight chassis, and advanced technology, making it a great choice for urban commuting and weekend rides.',
                specifications: {
                    engine: '693cc, parallel-twin, liquid-cooled',
                    power: '75 hp @ 8,500 rpm',
                    torque: '68 Nm @ 6,500 rpm',
                    transmission: '6-speed manual',
                    suspension: 'Front: Upside-down fork; Rear: Mono-shock',
                    brakes: 'Front: Dual disc; Rear: Disc with ABS',
                    fuelCapacity: '12 liters',
                    weight: '196 kg (curb weight)',
                },
            },
            {
                model: 'CFMoto 800MT',
                image: require('../assets/images/cfmoto/800mt.webp'),
                price: '$10,499', // <-- new
                description: 'The CFMoto 800MT is a high-performance adventure motorcycle designed for serious riders who seek both power and comfort. It is equipped with a 799cc parallel-twin engine, advanced suspension, and a host of modern features, making it ideal for long-distance touring and challenging off-road terrain.',
                specifications: {
                    engine: '799cc, parallel-twin, liquid-cooled',
                    power: '95 hp @ 8,250 rpm',
                    torque: '77 Nm @ 6,500 rpm',
                    transmission: '6-speed manual',
                    suspension: 'Front: Upside-down fork; Rear: Mono-shock',
                    brakes: 'Front: Dual disc; Rear: Disc with ABS',
                    fuelCapacity: '20 liters',
                    weight: '220 kg (curb weight)',
                },
            }
        ]
    },
    {
        name: 'KTM',
        image: require('../assets/images/ktm/ktm390enduro.jpeg'),
        bikes: [
            {
                model: 'KTM 390 Adventure',
                image: require('../assets/images/ktm/ktm390adventure.webp'),
                price: '$6,999', // <-- new
                description: 'The KTM 390 Adventure is a lightweight adventure motorcycle designed for both on-road and off-road riding. It features a 373cc single-cylinder engine, advanced suspension, and modern technology, making it an excellent choice for riders seeking adventure in a compact package.',
                specifications: {
                    engine: '373cc, single-cylinder, liquid-cooled',
                    power: '44 hp @ 9,000 rpm',
                    torque: '37 Nm @ 7,000 rpm',
                    transmission: '6-speed manual',
                    suspension: 'Front: WP Apex upside-down fork; Rear: WP Apex mono-shock',
                    brakes: 'Front: Disc with ABS; Rear: Disc with ABS',
                    fuelCapacity: '14 liters',
                    weight: '172 kg (curb weight)',
                },
            },
            {
                model: 'KTM 390 Enduro',
                image: require('../assets/images/ktm/ktm390enduro.jpeg'),
                price: '$6,499', // <-- new
                description: 'The KTM 390 Enduro is a versatile dual-sport motorcycle designed for both off-road adventures and urban commuting. It features a 373cc single-cylinder engine, long-travel suspension, and rugged styling, making it suitable for riders who want to explore a variety of terrains.',
                specifications: {
                    engine: '373cc, single-cylinder, liquid-cooled',
                    power: '44 hp @ 9,000 rpm',
                    torque: '37 Nm @ 7,000 rpm',
                    transmission: '6-speed manual',
                    suspension: 'Front: WP Apex upside-down fork; Rear: WP Apex mono-shock',
                    brakes: 'Front: Disc with ABS; Rear: Disc with ABS',
                    fuelCapacity: '14 liters',
                    weight: '172 kg (curb weight)',
                },
            },
            {
                model: 'KTM 790 Adventure',
                image: require('../assets/images/ktm/ktm790adventure.png'),
                price: '$9,499', // <-- new
                description: 'The KTM 790 Adventure is a mid-range adventure motorcycle that combines performance, comfort, and advanced features. It is powered by a 799cc parallel-twin engine and is equipped with modern technology such as ride-by-wire throttle, multiple riding modes, and advanced suspension, making it suitable for long-distance touring and off-road adventures.',
                specifications: {
                    engine: '799cc, parallel-twin, liquid-cooled',
                    power: '95 hp @ 8,000 rpm',
                    torque: '88 Nm @ 6,500 rpm',
                    transmission: '6-speed manual',
                    suspension: 'Front: WP Apex upside-down fork; Rear: WP Apex mono-shock',
                    brakes: 'Front: Dual disc with ABS; Rear: Disc with ABS',
                    fuelCapacity: '20 liters',
                    weight: '189 kg (curb weight)',
                },
            },
            {
                model: 'KTM 890 Adventure',
                image: require('../assets/images/ktm/ktm890adventure.jpeg'),
                price: '$11,499', // <-- new
                description: 'The KTM 890 Adventure is a high-performance adventure motorcycle designed for serious riders who seek both power and comfort. It is equipped with a 889cc parallel-twin engine, advanced suspension, and a host of modern features, making it ideal for long-distance touring and challenging off-road terrain.',
                specifications: {
                    engine: '889cc, parallel-twin, liquid-cooled',
                    power: '105 hp @ 8,000 rpm',
                    torque: '100 Nm @ 6,500 rpm',
                    transmission: '6-speed manual',
                    suspension: 'Front: WP Apex upside-down fork; Rear: WP Apex mono-shock',
                    brakes: 'Front: Dual disc with ABS; Rear: Disc with ABS',
                    fuelCapacity: '20 liters',
                    weight: '202 kg (curb weight)',
                },
            }
        ]
    },
    {
        name: 'Yamaha',
        image: require('../assets/images/yamaha/tenere.webp'),
        bikes: [
            {
                model: 'Yamaha Tenere 700',
                image: require('../assets/images/yamaha/tenere.webp'),
                price: '$9,599', // <-- new
                description: 'The Yamaha Tenere 700 is a versatile adventure motorcycle designed for both on-road and off-road riding. It features a 689cc parallel-twin engine, advanced suspension, and modern technology, making it an excellent choice for riders seeking adventure in a reliable package.',
                specifications: {
                    engine: '689cc, parallel-twin, liquid-cooled',
                    power: '72 hp @ 9,000 rpm',
                    torque: '68 Nm @ 6,500 rpm',
                    transmission: '6-speed manual',
                    suspension: 'Front: KYB upside-down fork; Rear: KYB mono-shock',
                    brakes: 'Front: Dual disc with ABS; Rear: Disc with ABS',
                    fuelCapacity: '16 liters',
                    weight: '205 kg (curb weight)',
                },
            },
            {
                model: 'Yamaha MT-07',
                image: require('../assets/images/yamaha/mt07.jpg'),
                price: '$7,699', // <-- new
                description: 'The Yamaha MT-07 is a popular naked motorcycle known for its agile handling and torquey parallel-twin engine. It is designed for urban commuting and spirited riding, offering a comfortable riding position and modern features.',
                specifications: {
                    engine: '689cc, parallel-twin, liquid-cooled',
                    power: '74 hp @ 9,000 rpm',
                    torque: '68 Nm @ 6,500 rpm',
                    transmission: '6-speed manual',
                    suspension: 'Front: Telescopic fork; Rear: Mono-shock',
                    brakes: 'Front: Dual disc with ABS; Rear: Disc with ABS',
                    fuelCapacity: '14 liters',
                    weight: '184 kg (curb weight)',
                },
            },
            {
                model: 'Yamaha R3',
                image: require('../assets/images/yamaha/r3.webp'),
                price: '$5,299', // <-- new
                description: 'The Yamaha R3 is a lightweight sport motorcycle designed for entry-level riders and those seeking a fun and nimble ride. It features a 321cc parallel-twin engine, aggressive styling, and modern technology, making it suitable for both city riding and weekend track days.',
                specifications: {
                    engine: '321cc, parallel-twin, liquid-cooled',
                    power: '42 hp @ 10,750 rpm',
                    torque: '29 Nm @ 9,000 rpm',
                    transmission: '6-speed manual',
                    suspension: 'Front: Telescopic fork; Rear: Mono-shock',
                    brakes: 'Front: Disc with ABS; Rear: Disc with ABS',
                    fuelCapacity: '14 liters',
                    weight: '169 kg (curb weight)',
                },
            },
            {
                model: 'Yamaha XSR700',
                image: require('../assets/images/yamaha/xsr700.webp'),
                price: '$8,499', // <-- new
                description: 'The Yamaha XSR700 is a retro-styled motorcycle that combines classic design elements with modern performance. It features a 689cc parallel-twin engine, a lightweight chassis, and advanced technology, making it a great choice for urban commuting and weekend rides.',
                specifications: {
                    engine: '689cc, parallel-twin, liquid-cooled',
                    power: '74 hp @ 9,000 rpm',
                    torque: '68 Nm @ 6,500 rpm',
                    transmission: '6-speed manual',
                    suspension: 'Front: Telescopic fork; Rear: Mono-shock',
                    brakes: 'Front: Dual disc with ABS; Rear: Disc with ABS',
                    fuelCapacity: '14 liters',
                    weight: '186 kg (curb weight)',
                },
            }
        ]
    },
    {
        name: 'Honda',
        image: require('../assets/images/honda/crf.jpg'),
        bikes: [
            {
                model: 'Honda CRF300L',
                image: require('../assets/images/honda/crf300l.avif'),
                price: '$4,999', // <-- new
                description: 'The Honda CRF300L is a lightweight dual-sport motorcycle designed for both on-road and off-road riding. It features a 286cc single-cylinder engine, long-travel suspension, and rugged styling, making it suitable for riders who want to explore a variety of terrains.',
                specifications: {
                    engine: '286cc, single-cylinder, liquid-cooled',
                    power: '27 hp @ 8,500 rpm',
                    torque: '26 Nm @ 6,500 rpm',
                    transmission: '6-speed manual',
                    suspension: 'Front: Showa inverted fork; Rear: Pro-Link mono-shock',
                    brakes: 'Front: Disc with ABS; Rear: Disc with ABS',
                    fuelCapacity: '7.8 liters',
                    weight: '157 kg (curb weight)',
                },
            },
            {
                model: 'Honda CB500X',
                image: require('../assets/images/honda/cb500x.jpeg'),
                price: '$6,999', // <-- new
                description: 'The Honda CB500X is a versatile adventure motorcycle that combines performance, comfort, and advanced features. It is powered by a 471cc parallel-twin engine and is equipped with modern technology such as LED lighting, a digital display, and ABS, making it suitable for long-distance touring and light off-road adventures.',
                specifications: {
                    engine: '471cc, parallel-twin, liquid-cooled',
                    power: '47 hp @ 8,600 rpm',
                    torque: '43 Nm @ 6,500 rpm',
                    transmission: '6-speed manual',
                    suspension: 'Front: Telescopic fork; Rear: Pro-Link mono-shock',
                    brakes: 'Front: Disc with ABS; Rear: Disc with ABS',
                    fuelCapacity: '17.1 liters',
                    weight: '197 kg (curb weight)',
                },
            },
            {
                model: 'Honda Africa Twin',
                image: require('../assets/images/honda/africatwin.jpg'),
                price: '$14,399', // <-- new
                description: 'The Honda Africa Twin is a high-performance adventure motorcycle designed for serious riders who seek both power and comfort. It is equipped with a 1084cc parallel-twin engine, advanced suspension, and a host of modern features, making it ideal for long-distance touring and challenging off-road terrain.',
                specifications: {
                    engine: '1084cc, parallel-twin, liquid-cooled',
                    power: '101 hp @ 7,500 rpm',
                    torque: '105 Nm @ 6,250 rpm',
                    transmission: '6-speed manual or DCT',
                    suspension: 'Front: Showa inverted fork; Rear: Pro-Link mono-shock',
                    brakes: 'Front: Dual disc with ABS; Rear: Disc with ABS',
                    fuelCapacity: '18.8 liters',
                    weight: '226 kg (curb weight)',
                },
            },
            {
                model: 'Honda Rebel 500',
                image: require('../assets/images/honda/rebel500.jpg'),
                price: '$6,499', // <-- new
                description: 'The Honda Rebel 500 is a stylish cruiser motorcycle that combines classic design elements with modern performance. It features a 471cc parallel-twin engine, a low seat height, and advanced technology, making it a great choice for urban commuting and weekend rides.',
                specifications: {
                    engine: '471cc, parallel-twin, liquid-cooled',
                    power: '45 hp @ 8,500 rpm',
                    torque: '43 Nm @ 6,000 rpm',
                    transmission: '6-speed manual',
                    suspension: 'Front: Telescopic fork; Rear: Twin shocks',
                    brakes: 'Front: Disc with ABS; Rear: Disc with ABS',
                    fuelCapacity: '11.2 liters',
                    weight: '191 kg (curb weight)',
                },
            }
        ]
    },
    {
        name: 'Kawasaki',
        image: require('../assets/images/kawasaki/versys.jpeg'),
        bikes: [
            {
                model: 'Kawasaki Versys 650',
                image: require('../assets/images/kawasaki/versys.jpeg'),
                price: '$7,999', // <-- new
                description: 'The Kawasaki Versys 650 is a versatile adventure motorcycle that combines performance, comfort, and advanced features. It is powered by a 649cc parallel-twin engine and is equipped with modern technology such as ABS, traction control, and adjustable suspension, making it suitable for long-distance touring and light off-road adventures.',
                specifications: {
                    engine: '649cc, parallel-twin, liquid-cooled',
                    power: '67 hp @ 8,500 rpm',
                    torque: '64 Nm @ 7,000 rpm',
                    transmission: '6-speed manual',
                    suspension: 'Front: Telescopic fork; Rear: Uni-Trak mono-shock',
                    brakes: 'Front: Dual disc with ABS; Rear: Disc with ABS',
                    fuelCapacity: '21 liters',
                    weight: '213 kg (curb weight)',
                },
            },
            {
                model: 'Kawasaki Ninja 400',
                image: require('../assets/images/kawasaki/ninja400.jpg'),
                price: '$5,899', // <-- new
                description: 'The Kawasaki Ninja 400 is a lightweight sport motorcycle designed for entry-level riders and those seeking a fun and nimble ride. It features a 399cc parallel-twin engine, aggressive styling, and modern technology, making it suitable for both city riding and weekend track days.',
                specifications: {
                    engine: '399cc, parallel-twin, liquid-cooled',
                    power: '49 hp @ 10,000 rpm',
                    torque: '38 Nm @ 8,000 rpm',
                    transmission: '6-speed manual',
                    suspension: 'Front: Telescopic fork; Rear: Uni-Trak mono-shock',
                    brakes: 'Front: Disc with ABS; Rear: Disc with ABS',
                    fuelCapacity: '14 liters',
                    weight: '168 kg (curb weight)',
                },
            },
            {
                model: 'Kawasaki Z650',
                image: require('../assets/images/kawasaki/z650.jpg'),
                price: '$7,499', // <-- new
                description: 'The Kawasaki Z650 is a popular naked motorcycle known for its agile handling and torquey parallel-twin engine. It is designed for urban commuting and spirited riding, offering a comfortable riding position and modern features.',
                specifications: {
                    engine: '649cc, parallel-twin, liquid-cooled',
                    power: '67 hp @ 8,500 rpm',
                    torque: '64 Nm @ 7,000 rpm',
                    transmission: '6-speed manual',
                    suspension: 'Front: Telescopic fork; Rear: Uni-Trak mono-shock',
                    brakes: 'Front: Dual disc with ABS; Rear: Disc with ABS',
                    fuelCapacity: '15 liters',
                    weight: '187 kg (curb weight)',
                },
            },
            {
                model: 'Kawasaki Vulcan S',
                image: require('../assets/images/kawasaki/vulcans.jpg'),
                price: '$7,999', // <-- new
                description: 'The Kawasaki Vulcan S is a stylish cruiser motorcycle that combines classic design elements with modern performance. It features a 649cc parallel-twin engine, a low seat height, and advanced technology, making it a great choice for urban commuting and weekend rides.',
                specifications: {
                    engine: '649cc, parallel-twin, liquid-cooled',
                    power: '61 hp @ 7,500 rpm',
                    torque: '63 Nm @ 6,600 rpm',
                    transmission: '6-speed manual',
                    suspension: 'Front: Telescopic fork; Rear: Uni-Trak mono-shock',
                    brakes: 'Front: Disc with ABS; Rear: Disc with ABS',
                    fuelCapacity: '14 liters',
                    weight: '220 kg (curb weight)',
                },
            }
        ]
    },
];
```

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
