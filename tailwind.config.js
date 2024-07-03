

/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
    "./node_modules/@nextui-org/theme/dist/components/(accordion|button|calendar|date-input|date-picker|input|divider|ripple|spinner|popover).js",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
         
      fontFamily: {
        consolas: ["Consolas", "monospace"],
      },
    },
  },
  plugins: [
    require("daisyui"),
    nextui()
  ],
};
