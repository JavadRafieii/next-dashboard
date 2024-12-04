/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
      }
    },
    fontFamily: {
      'Roboto-Thin': 'Roboto-Thin',
      'Roboto-Light': 'Roboto-Light',
      'Roboto-Regular': 'Roboto-Regular',
      'Roboto-Medium': 'Roboto-Medium',
      'Roboto-Bold': 'Roboto-Bold',
      'Roboto-Black': 'Roboto-Black',
      'IranSans': 'IranSans',
      'IranSans-Light': 'IranSans-Light',
      'IranSans-Medium': 'IranSans-Medium',
      'IranSans-Medium': 'IranSans-Medium',
      'IranSans-Bold': 'IranSans-Bold',
      'IranSans-Black': 'IranSans-Black',
    },
    extend: {
      backgroundImage: {
        'main-gradient': 'linear-gradient(45deg, #29323c, #485563)',
      },
      colors: {
        'boxes': '#0003',
        'boxes-line': '#ffffff26',
        'inputs': '#00000026',
        'inputs-line': '#ffffff26',
        'buttons': '#ffffff26',
        'buttons-line': '#ffffff59',
        'buttons-hover': '#fff3',
        'line': '#ffffff26',
        'dark-boxes': '#1e1e1e',
        'dark-boxes-hover': '#404040',
        'text': '#ffffffa3',
        'standing-menu-hover': '#ffffff1a',
        'light-boxes': '#ffffff1f',
      },
      boxShadow: {
        'inputs-shadow': '0 0 0 .25rem rgba(255, 255, 255, .25)',
      }
    },
  },
  plugins: [],
};
