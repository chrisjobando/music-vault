import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      primary: '#8A81F7',
      secondary: '#98DCFF',
      background: '#F3F6FF',
      success: '#7EEAD6',
      info: '#FFC56D',
      warning: '#EE63A1',
      white: '#FFFFFF',
      black: '#191919',
      red: '#FF5051',
      dialogBackdrop: 'rgba(0, 0, 0, 0.3)',
      transparent: 'transparent'
    },
    extend: {
      boxShadow: {
        light: '2px 3px 0px 0px rgb(0, 0, 0)',
        harsh: '4px 4px 0px 0px rgb(0, 0, 0)'
      },
      minWidth: {
        sm: '24rem'
      }
    }
  },
  plugins: [forms, typography]
};
