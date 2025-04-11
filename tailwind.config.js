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
        "light": {
          "primary": "#0A1A2F",  // Azul acero oscuro (base metálica)
          "secondary": "#1E3A5F",  // Azul metalizado medio
          "accent": "#FF7D33",  // Naranja luminoso (como chispas de soldadura)
          "neutral": "#2D3748",  // Gris metálico
          "background": "#F0F2F5",  // Gris claro neutro
          "text": "#1A202C"  // Texto oscuro
        },
        "dark": {
          "primary": "#0A1A2F",  // Azul acero oscuro (mismo que light para consistencia)
          "secondary": "#12263D",  // Azul metálico más profundo
          "accent": "#FF914D",  // Naranja más brillante para contraste
          "neutral": "#1E293B",  // Gris metalizado oscuro
          "background": "#0F172A",  // Fondo azul noche industrial
          "text": "#E2E8F0"  // Texto claro
        },
        "metallic": {
          "blueSteel": "#0A1A2F",
          "weldingOrange": "#FF7D33",
          "ironGray": "#3A4556",
          "sparkGold": "#FFB347",  // Opcional: tono dorado para detalles
          "patina": "#4D9078"  // Opcional: verde pátina para acentos
        }
      },
    },
  },
  plugins: [],
}