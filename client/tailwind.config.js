/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				"hero-bg": "url('/assets/blue-background.jpg')",
				"custom-gradient":
					"linear-gradient(to bottom, #020024, #090979, #00d4ff)",
			},
		},
	},
	plugins: [],
};
