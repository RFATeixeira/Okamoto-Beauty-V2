import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      emphasis: ['Italiana', 'sans-serif'],
      body: ['Nobile', 'sans-serif'],
      buttons: ['Outfit', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'hero-image': "url('/hero-image.png')",
        'hero-image2': "url('/hero-image2.png')",
      },
      colors: {
        'brand-pink': '#E9646F',
        'brand-pink-10': '#FF909A',
        'brand-pink-20': '#D3777F',
        'brand-blue': '#4285F4',
        'dark-10': '#423838',
        'dark-20': '#9A9A9A',
        'light-10': '#F8F8F8',
        'light-20': '#F7F4F2',
      },
    },
  },
  plugins: [],
};
export default config;
