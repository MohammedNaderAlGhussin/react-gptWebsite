/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-bg": "#040C18",
        "color-footer": "#031B34",
        "color-blog": "#042c54",
        "color-text": "#81AFDD",
        "color-subtext": "#FF8A71",
      },
      backgroundImage: {
        "gradient-text":
          "linear-gradient(89.97deg, #AE67FA 1.84%, #F49867 102.67%)",
        "gradient-bar":
          "linear-gradient(103.22deg, #AE67FA -13.86%, #F49867 99.55%)",
      },
      fontFamily: {
        "main-font": "'Manrope', sans-serif",
      },
      spacing: {
        "sec-padding": "4rem 6rem",
        "md-sec-padding": "4rem",
        "sm-sec-padding": "4rem 2rem",
        "sec-margin": "4rem 6rem",
        "md-margin-padding": "4rem",
        "sm-margin-padding": "4rem 2rem",
      },
    },
  },
  plugins: [],
};
