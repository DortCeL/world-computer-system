/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				"hero-bg": "url('./assets/blue-background.jpg')",
			},
		},
	},
	plugins: [],
};
