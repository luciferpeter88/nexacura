/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: { custom: "calc(100% - 18rem)" },
      colors: {
        primary: "var(--primary-colour)",
        secondary: "var(--secondary-colour)",
      },
    },
  },
  plugins: [],
};
