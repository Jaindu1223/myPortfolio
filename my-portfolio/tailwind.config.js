/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      spacing: {
        '96': '24rem', // 384px
        '112': '28rem', // 448px
        '128': '32rem', // 512px
        '144': '36rem', // 576px
        '160': '40rem', // 640px
        '224': '56rem', // 640px
        '320': '80rem', // 640px
      },
    },
  },
  plugins: [],
};
