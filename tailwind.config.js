/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
      gradientColorStops: {
        'indigo-start': '#6366f1',
        'indigo-end': '#4f46e5',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}