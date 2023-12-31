const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ['./src/**/*.{astro,html,svelte,vue,js,ts,jsx,tsx}'],
    plugins: [require("@tailwindcss/typography"), require("daisyui")],
    theme: {
      extend: {
        fontFamily: {
          sans: ['Atkinson Hyperlegible', ...defaultTheme.fontFamily.sans],
        },
      },
    },
    daisyui: {
      themes: ["emerald", "dracula"],
    },
  };
  