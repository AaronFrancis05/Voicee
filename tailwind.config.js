/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["expo-router/entry", "./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        background: "#fff9e3",
        foreground: "#081126",
        card: "#fff8e7",
        muted: "#f6eecf",
        "muted-foreground": "rgba(0, 0, 0, 0.6)",
        primary: "#081126",
        accent: "#ea7a53",
        border: "rgba(0, 0, 0, 0.1)",
        success: "#16a34a",
        destructive: "#dc2626",
        subscription: "#8fd1bd",
      },
      fontFamily: {
        ubuntu: ["Ubuntu-Regular","sans-serif"],
        "ubuntu-light": ["Ubuntu-Light"],
        "ubuntu-bold": ["Ubuntu-Bold"],
        "ubuntu-medium": ["Ubuntu-Medium"],
      },
      spacing: {
        0: 0,
        1: 4,
        2: 8,
        3: 12,
        4: 16,
        5: 20,
        6: 24,
        7: 28,
        8: 32,
        9: 36,
        10: 40,
        11: 44,
        12: 48,
        14: 56,
        16: 64,
        18: 72,
        20: 80,
        24: 96,
        30: 120,
      },
      borderRadius: {
        "4xl": 32,
      },
      size: {
        12: 48,
        14: 56,
        16: 64,
        6: 24,
      },
      width: {
        44: 176,
      },
      height: {
        50: 200,
      },
      minHeight: {
        50: 200,
      }
    },
  },
  plugins: [],
}