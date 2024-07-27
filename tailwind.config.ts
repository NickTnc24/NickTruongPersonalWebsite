import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes:{
        fadeInRight: {
          '0%': {opacity: '0', transform: 'translateX(-40%)'},
          '100%': {opacity: '1', transform: 'translateX(0%)'}
        },
        fadeInLeft: {
          '0%': {opacity: '0', transform: 'translateX(40%)'},
          '100%': {opacity: '1', transform: 'translateX(0%)'}
        }
      },
      animation: {
        'ping-notification': 'ping 2s cubic-bezier(0, .1, 1, 1) infinite',
        'fadeInRight': 'fadeInRight 1s',
        'fadeInLeft': 'fadeInLeft 1s',

      },
      colors: {
        'darktext': 'rgb(237, 241, 243)',
        'darkbackground': 'rgb(15, 21, 22)',
        'darkbackgroundshade': "rgb(30,42,44)",
        'darkprimary': 'rgb(74, 76, 135)',
        'darksecondary': 'rgb(140, 184, 222)',
        'darkaccent': 'rgb(55 65 81)',
        'lighttext': 'rgb(12, 7, 16)',
        'lightbackground': 'rgb(253, 244, 221)',
        'lightbackgroundshade': "rgb(228,220,199)",
        'lightprimary': 'rgb(154, 177, 214)'
      },
      
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
