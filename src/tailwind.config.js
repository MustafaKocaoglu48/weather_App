/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // JSX dosyalarını da içerecek şekilde ayarlandı
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5d78ff", // Özel renk tanımlama örneği
        secondary: "#3c3f47",
      },
    },
  },
  plugins: [],
};
