const { createGlobPatternsForDependencies } = require("@nx/react/tailwind");
const { join } = require("path");

module.exports = {
  content: [
    join(__dirname, "{src,pages,components,modules}/**/*!(*.stories|*.spec).{ts,tsx,html}"),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  darkMode: "none",
  theme: {
    colors: {
      white: "#FFFF",
      light: "#FAFAFA",
      black: "#000000",
      primary: {
        100: "#ECF9CA",
        200: "#DEF3A7",
        300: "#D1ED84",
        400: "#C3E861",
        500: "#A8DC1B",
        600: "#8CB817",
        700: "#709312",
        800: "#475D0C",
        900: "#2B3807",
      },

      blue: {
        100: "#CEE6F3",
        200: "#AED5EA",
        300: "#8EC3E1",
        400: "#6FB2D8",
        500: "#4FA0CF",
        600: "#2777A5",
        700: "#184863",
        800: "#103042",
        900: "#0C2432",
      },

      "secondary-blue": {
        100: "#CEEAFF",
        200: "#A5CAE5",
        300: "#7CA9CB",
        400: "#5289B0",
        500: "#296896",
        600: "#003A63",
        700: "#001D32",
        800: "#000E19",
        900: "#00070Cs",
      },

      neutral: {
        50: "#ffffff",
        100: "#F5F5F5",
        200: "#E5E5E5",
        300: "#D4D4D4",
        400: "#A3A3A3",
        500: "#737373",
        600: "#525252",
        700: "#404040",
        800: "#262626",
        900: "#171717",
      },

      version3: {
        100: "#8ECAE6",
        200: "#219EBC",
        300: "#023047",
        400: "#FFB703",
        500: "#FB8500",
      },
      version2: {
        100: "#8ECAE6",
        200: "#A3CCAB",
        300: "#34675C",
        400: "#053D38",
        500: "#F26800",
      },
      error: {
        base: "#F4677F",
        100: "#FEDBD7",
        200: "#FDB1AF",
        300: "#F9868F",
        400: "#F4677F",
        500: "#ED3768",
        600: "#CB2864",
        700: "#AA1B5D",
        800: "#891154",
        900: "#710A4E",
      },
      warning: {
        base: "#F14F48",
        100: "#F9B7B4",
        200: "#F69490",
        300: "#F4726C",
        400: "#F14F48",
        500: "#EE2D24",
        600: "#CD261E",
        700: "#AC1F18",
        800: "#8C1712",
        900: "#6B100C",
      },
    },

    extend: {},
  },
  plugins: [],
};
