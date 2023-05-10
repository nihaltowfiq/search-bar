/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		// fontFamily: {
		// 	sans: ['Segoe UI', 'sans-serif'],
		// },
		container: {
			center: true,
			padding: '1rem',
			screens: {
				xs: '425px',
				sm: '640px',
				md: '769px',
				lg: '1024px',
				xl: '1280px',
			},
		},
		extend: {
			colors: {
				primary: '#25cb5a',
				dark: '#0b0814',
				gray: '#d5dbdf',
				white: '#fffffff',
			},
		},
	},
	plugins: [],
};

