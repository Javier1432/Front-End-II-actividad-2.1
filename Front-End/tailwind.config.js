/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primario': '#214DA6',
        'secundario': '#F2A413',
        'claro': '#4B86DE',
        'oscuro': '#F28F16',
        'fondo': '#FFFFFF',
        'blanco': '#F5F5F5',
        'negro': '#181818'
      },
      fontFamily: {
        Roboto: ['Roboto', 'sans-serif'],
        Merriweather: ["Merriweather", 'serif'],
        Montserrat: ["Montserrat", 'sans-serif']
      },
      backgroundImage: {
        'fondito': "url('./src/assets/bg.png')",
        'lateral': "url('./src/assets/lateral.png')",
      }
    },
  },
  plugins: [],
}

