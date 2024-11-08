/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				accent: '#1a1b1e',
				accentLight: '#2f3032',
				accentDark: '#151517',
			},
		},
	},
	plugins: [],
}
