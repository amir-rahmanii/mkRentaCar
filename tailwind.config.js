/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      'xs': '534px',
      'sm': '716px',
      'md': '980px',
      'lg': '1160px',
      'xl': '1340px'
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "12px",
        sm: "0.625rem"
      }
    },
    extend: {
      fontFamily : {
        "light" : "light",
        "medium" : "medium",
        "bold" : "bold",
        "italic" : "italic",
        "bolditalic" : "bolditalic"
      },
      colors : {
        'orangeCus' : "#EBB100",
        'orangeCus2' : "#ED8413"
      }
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    }
  ],
}

