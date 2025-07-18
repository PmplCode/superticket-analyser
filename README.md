# 🛒 SuperTicket

SuperTicket is a mobile-first app that lets you take a photo of your supermarket receipt and instantly analyzes your groceries. Built with Expo, React Native, and Tailwind CSS (NativeWind), SuperTicket uses AI to extract, categorize, and review your shopping items—giving you actionable health and budget tips based on your purchases.

---

## ✨ Features

- **Receipt Photo Analysis**: Snap a picture of your supermarket ticket and get instant feedback.
- **Grocery Extraction & Categorization**: Automatically lists and groups your purchased items (fruits, vegetables, snacks, etc.).
- **Health & Budget Insights**: Highlights healthy and less healthy choices, and suggests ways to improve your shopping.
- **Clear, Actionable Advice**: Summarizes nutritional quality and spending patterns in a user-friendly format.
- **Cross-Platform**: Works on iOS, Android, and web (via Expo).
- **Modern UI**: Styled with Tailwind CSS via NativeWind for a clean, responsive look.

---

## 📱 Screenshots

<!-- Add screenshots here if available -->

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or newer recommended)
- [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/):
  ```bash
  npm install -g expo-cli
  ```

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/PmplCode/superticket-analyser-app
   cd SuperTicket
   ```
2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```
3. **Start the development server:**
   ```bash
   npm start
   # or
   yarn start
   ```
4. **Run on your device:**
   - Use the Expo Go app (iOS/Android) to scan the QR code.
   - Or run on an emulator/simulator.

---

## 🛠️ Tech Stack

- **React Native** (with Expo)
- **Expo Router** (navigation)
- **NativeWind** (Tailwind CSS for React Native)
- **Zustand** (state management)
- **TypeScript**
- **OpenRouter AI** (for receipt analysis)

---

## �� Project Structure

```
SuperTicket/
  app/            # App entry points and navigation
  assets/         # Images and icons
  components/     # Reusable UI components (scanner, advice display, etc.)
  store/          # State management (Zustand)
  utils/          # Utility functions (AI, image upload, etc.)
  global.css      # Tailwind CSS config
  ...
```

---

## 📝 Scripts

- `npm start` / `yarn start` — Start Expo development server
- `npm run android` / `yarn android` — Run on Android device/emulator
- `npm run ios` / `yarn ios` — Run on iOS simulator
- `npm run web` / `yarn web` — Run in web browser

---

## 🤝 Contributing

Contributions are welcome! Please open issues or pull requests for improvements, bug fixes, or new features. If you have ideas for new types of advice, better receipt parsing, or UI improvements, we'd love to hear from you!

---

## 🙏 Acknowledgements

- [Expo](https://expo.dev/)
- [React Native](https://reactnative.dev/)
- [NativeWind](https://www.nativewind.dev/)
- [Zustand](https://zustand-demo.pmnd.rs/)
- [Tailwind CSS](https://tailwindcss.com/)
- [OpenRouter](https://openrouter.ai/) (AI receipt analysis)

---

> Made with ❤️ to help you shop smarter and live healthier.
