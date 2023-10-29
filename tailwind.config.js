import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import daisyui from 'daisyui';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {}
  },
  daisyui: {
    themes: [
      {
        harmony: {
          primary: '#8a81f7',
          secondary: '#98dcff',
          accent: '#ffb86b',
          neutral: '#414558',
          'base-100': '#272935',
          info: '#4065c9',
          success: '#5ad89d',
          warning: '#f4da66',
          error: '#ec6f6f'
        }
      }
    ]
  },
  plugins: [forms, typography, daisyui]
};
