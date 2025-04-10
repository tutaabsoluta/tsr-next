/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          primary: '#F9FAFB', 
          secondary: '#E5E7EB',
          accent: '#4B5563',
          background: '#fff'
        },
        dark: {
          primary: '#1F2937', 
          secondary: '#374151',
          accent: '#9CA3AF',
          background: '#374151'
        },
      },
    },
  },
  plugins: [],
}