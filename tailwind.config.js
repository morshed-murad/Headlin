/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        radiofirstcol: "#10766E",
        radiosecondcol: "#134E4A",
        darkgreen: "#08B8D3",
        lighgreen: "#4ADE80",
        greenbg: "#2ED5C0",
        greenlightbg: "#21D2ED",
        listboxbody: "#FCD14B",
        listboxbod: "#f97517",
        indigo: {
          100: "#e0e0fc",
          200: "#c1c2f9",
          300: "#a2a3f7",
          400: "#8385f4",
          500: "#6466f1",
          600: "#5052c1",
          700: "#3c3d91",
          800: "#282960",
          900: "#141430",
        },
        purple: {
          100: "#eeddfd",
          200: "#dcbbfc",
          300: "#cb99fa",
          400: "#b977f9",
          500: "#a855f7",
          600: "#8644c6",
          700: "#653394",
          800: "#432263",
          900: "#221131",
        },
        colpiksrout: "#6d64f2",
        colroutHover: "#654CC2",
      },
      fontFamily: {
        lobster: ['"Lobster", sans-serif'],
      },
      animation: {
        spinfew: "rotat 4s linear 1 ",
      },
      keyframes: {
        rotat: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(90deg)" },
        },
      },
    },
  },
  plugins: [],
};
