/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Scan all relevant files in the `src` directory
    "./pages/**/*.{js,ts,jsx,tsx}", // If you have a `pages/` directory
    "./components/**/*.{js,ts,jsx,tsx}", // If you have a `components/` directory
    "./app/**/*.{js,ts,jsx,tsx}", // If using the `app` directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};