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
        title: ['"Albert Sans"', 'Helvetica', 'sans-serif', 'arial'],
        text: ['Almarai', 'sans-serif'],
      },
    },
    backgroundImage: {
      grid: "url('/assets/lines.svg')",
      ONE: "url('/assets/oracle-one-logo.svg')",
    },
    gridTemplateColumns: {
      auto: 'repeat(auto-fill, minmax(96px, 1fr))',
    },
  },
  plugins: [
    plugin(function ({ addUtilities, addComponents, e, config }) {
      addUtilities({
        '.text-gradient': {
          'background-image': `
            radial-gradient( at 0% 50%, #263167 0%, rgba(0, 0, 0, 0) 80%),
            radial-gradient( at 50% 0%, #19A598 0%, transparent);`,
        },
        '.bg-radial-gradient': {
          'background-image': `
            radial-gradient(farthest-side at 40% 50%, #19a5979d 0%, rgba(0, 0, 0, 0) 60%),
            radial-gradient(farthest-side at 50% 50%, #4376ecbe 0%, transparent);`,
        },
        '.mesh-gradient': {
          'background-image': `
            radial-gradient(farthest-side at 89% 9%, #19a59759, rgba(0, 0, 0, 0) 70%), radial-gradient(farthest-side at 4% 45%, #4376ec57, rgba(0, 0, 0, 0) 80%), radial-gradient(farthest-side at 35% 26%, #FFF3D9 0%, transparent);`,
        },
        '.mesh-gradient-full': {
          'background-image': `
            radial-gradient(at 0% 0%, #4376ec57, rgba(0, 0, 0, 0) 50%),radial-gradient(farthest-side at 80% 30%, #19a59759, rgba(0, 0, 0, 0) 50%),radial-gradient(farthest-side at 100% 100%, #FFF3D9 0%, transparent);`,
        },
        '.mesh-gradient-mobile': {
          'background-image': `
            radial-gradient(at 70% 15%,  #4376ec52, rgba(0, 0, 0, 0) 60%), radial-gradient(farthest-side at 24% 60%, #19a59759, rgba(0, 0, 0, 0) 70%), radial-gradient(farthest-side at 35% 26%, #FEE7E1 0%, transparent)`,
        },
      });
    }),
  ],
};
