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
        cream: 'rgb(var(--cream) / <alpha-value>)',
      },
      fontFamily: {
        title: ['CascadiaCode', 'sans-serif'],
        text: ['Almarai', 'sans-serif'],
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities, addComponents, e, config }) {
      addUtilities({
        '.bg-radial-gradient': {
          'background-image': `
            radial-gradient(farthest-side at 4% 4%, #09BAD5 0%, rgba(0, 0, 0, 0) 80%),
            radial-gradient(circle farthest-side at 0% 100%, #25ED91 0%, #EEF88E);`,
        },
        '.mesh-gradient': {
          'background-image': `
            radial-gradient(farthest-side at 89% 9%, #EEF88E 0%,rgba(0, 0, 0, 0) 70%), radial-gradient(farthest-side at 4% 45%, #09BAD5 0%, rgba(0, 0, 0, 0) 80%),
            radial-gradient(circle farthest-side at 35% 26%, #25ED91 0%, transparent);`,
        },
      });
    }),
  ],
};
