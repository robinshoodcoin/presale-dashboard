/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        home: "url('/assets/bg-home.png')",
        navGradient:
          "linear-gradient(15deg, rgba(7,29,41,0.22) 0%, rgba(0,46,45,0.81) 87%)",
      },
      colors: {
        'primary': "#e1e8ed",
        "secondary": "#6c737d",
      },
    },
  },
  plugins: [],
};
