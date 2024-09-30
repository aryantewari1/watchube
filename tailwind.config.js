/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".hide-scrollbar": {
          /* For Chrome, Safari, and Opera */
          "&::-webkit-scrollbar": {
            display: "none",
          },
          /* For IE, Edge, and Firefox */
          "-ms-overflow-style": "none", // IE and Edge
          "scrollbar-width": "none", // Firefox
        },
        ".thin-scrollbar": {
          "scrollbar-width": "thin" /* For Firefox */,
          "&::-webkit-scrollbar": {
            width: "6px" /* For Chrome, Safari, and Opera */,
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#888" /* Customize the color of the scrollbar thumb */,
            borderRadius: "10px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            background: "#555" /* Change color on hover */,
          },
        },
      });
    },
  ],
};
