/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				"hero-bg": "url('/assets/blue-background.jpg')",
				"custom-gradient":
					"linear-gradient(to bottom, #6DAFCB, #A7A4D0, #F5C1DB)",
			},
		},
	},
	plugins: [],
};
