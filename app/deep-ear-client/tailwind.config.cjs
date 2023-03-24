/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'persian-pink': {
					'50': '#fdf2f8',
					'100': '#fce7f4',
					'200': '#fad0ea',
					'300': '#f8a9d7',
					'400': '#f273bb',
					'500': '#ea4aa0',
					'600': '#d82a7f',
					'700': '#bc1a64',
					'800': '#9b1953',
					'900': '#811a48',
				},
			},
		},
	},
	plugins: [],
}
