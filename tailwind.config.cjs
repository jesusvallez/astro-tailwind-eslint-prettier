const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function astroComponentsPlugin({ addComponents }) {
      addComponents({
        '.h-my-screen': {
          height: ['100vh', '100dvh'],
        },
      })
    }),
  ],
}
