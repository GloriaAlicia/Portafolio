/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        blues: 'rgb(var(--blues) / <alpha-value>)',
        lime: 'rgb(var(--lime-green) / <alpha-value>)',
        mindaro: 'rgb(var(--mindaro) / <alpha-value>)',
        teal: 'rgb(var(--teal) / <alpha-value>)',
        astronaut: 'rgb(var(--astronaut) / <alpha-value>)',
        nara: 'rgb(var(--nara) / <alpha-value>)',
      },
      fontFamily: {
        title: ['yipes', 'CascadiaCode', 'sans-serif'],
        text: ['Almarai', 'sans-serif'],
      },
    },
    backgroundImage: {
      grid: "url('/assets/lines.svg')",
      ONE: "url('/assets/oracle-one-logo.svg')",
    },
  },
  plugins: [
    plugin(function ({ addUtilities, addComponents, e, config }) {
      addUtilities({
        '.bg-radial-gradient': {
          'background-image': `
            radial-gradient(farthest-side at 4% 4%, #4376EC 0%, rgba(0, 0, 0, 0) 80%),
            radial-gradient(farthest-side at 0% 100%, #FFEBD0 0%, #EEF88E);`,
        },
        '.mesh-gradient': {
          'background-image': `
            radial-gradient(farthest-side at 89% 9%, #19a5979d, rgba(0, 0, 0, 0) 70%), radial-gradient(farthest-side at 4% 45%, #4376ecbe, rgba(0, 0, 0, 0) 80%), radial-gradient(farthest-side at 35% 26%, #FFF3D9 0%, transparent);`,
        },
        '.vertical': {
          'writing-mode': 'vertical-rl',
        },
      });
    }),
  ],
};
