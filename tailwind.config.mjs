/** @type {import('tailwindcss').Config} */
//const defaultTheme = require('tailwindcss/defaultTheme')
import defaultTheme from 'tailwindcss/defaultTheme'
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      "white-smoke": "#F5F5F5",
      "princeton-orange": "#F68F0E",
      "smoky-black": "#0C0704",
      "chocolate": "#814B09",
      "sunset": "#F6C282",
      "tigerseye": "#BC6D0C"
    },
    extend: {
      fontFamily: {
        'pacifico': ["Pacifico", ...defaultTheme.fontFamily.mono],
        'raleway': ["Raleway Variable", ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}
