/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blush: "#FADBE7",
        baby: "#DCEFFF",
        butter: "#FFF6CC",
        lilac: "#EADFFF",
        cream: "#FFF9F1",
        mint: "#DDF5E8",
        ink: "#2A233A",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(42, 35, 58, 0.08)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};
