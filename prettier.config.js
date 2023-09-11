module.exports = {
	bracketSpacing: true,
	useTabs: true,
	singleQuote: true,
	trailingComma: 'none',
	printWidth: 100,
	overrides: [{ files: '*.svelte', options: { parser: 'svelte' } }],
	pluginSearchDirs: ['.'],
	plugins: ["prettier-plugin-svelte", "prettier-plugin-tailwindcss"],
};
