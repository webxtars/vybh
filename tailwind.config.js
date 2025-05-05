/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      gray:"#1E2A38",
      darkgray:"#1e1e1e",
      lightgray:"#9CA3AF",
      black:"black",
      white:"white",
      purple:"#7E22CE",
      green:"green"
    }
  },
  plugins: [],
}