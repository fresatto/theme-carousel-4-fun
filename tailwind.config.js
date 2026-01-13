/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        "gradient-from": "var(--color-gradient-from)",
        "gradient-to": "var(--color-gradient-to)",
        "contrast-text": "var(--color-contrast-text)",
        contrast: "var(--color-contrast)",
      },
    },
  },
  plugins: [],
};
