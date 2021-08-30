const config = {
	mode: "jit",
	purge: [
		"./src/**/*.{html,js,svelte,ts}",
	],
	theme: {
		extend: {
		},
	},
	variants: {
		extend: {
		  backgroundColor: ['checked'],
		  borderColor: ['checked'],
		}
	  },
	plugins: [],
	darkMode: 'class'
};

module.exports = config;
