module.exports = {
  plugins: ['prettier-plugin-svelte', 'prettier-plugin-tailwindcss'],
  overrides: [{ files: '*.svelte', options: { parser: 'svelte' } }],
  useTabs: false,
  singleQuote: true,
  trailingComma: 'none',
  printWidth: 100
};
