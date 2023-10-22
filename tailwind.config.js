import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      primary: 'rgb(169, 165, 255)',
      secondary: 'rgb(166, 197, 234)',
      background: 'rgb(247, 242, 238)',
      success: 'rgb(186, 255, 158)',
      info: 'rgb(255, 245, 159)',
      warning: 'rgb(254, 159, 159)',
      white: 'rgb(255, 255, 255)',
      black: 'rgb(0, 0, 0)',
      red: 'rgb(255, 0, 0)',
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
