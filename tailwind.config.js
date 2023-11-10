/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg-1': "url('../public/photos/sjsu-bg/sjsu2.jpg')",
        'custom-bg-2': "url('../public/photos/sjsu-bg/sjsu3.jpg')",
        'custom-bg-3': "url('../public/photos/sjsu-bg/sjsu4.jpg')",
        'custom-bg-4': "url('../public/photos/sjsu-bg/sjsu5.jpg')",
        'custom-bg-5': "url('../public/photos/sjsu-bg/sjsu6.jpg')",
        'custom-bg-6': "url('../public/photos/sjsu-bg/sjsu7.jpg')",
        'custom-bg-7': "url('../public/photos/sjsu-bg/sjsu8.jpg')",
        'custom-bg-8': "url('../public/photos/sjsu-bg/sjsu9.jpg')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        sm: { max: '770px' },
        md: { max: '1279px' },
      }
    },
  },
  plugins: [],
}
