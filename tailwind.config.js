/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      gray:"#020617",
      darkgray:"#020617",
      lightgray:"#1f2937",
      black:"black",
      white:"white",
      purple:"#7E22CE",
      green:"green",
      yellow:"yellow",
      lightBlue:"#60A5FA"
    }
  },
  plugins: [],
}