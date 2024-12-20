/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        CustomChocolate:"#B77D43",
        LightCustom:"#E59B50",
        CustomWhite:"#ffffff"
      },
    },
  },
  plugins: [],
};
