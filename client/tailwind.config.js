/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				"hero-bg": "url('/assets/background-stone.jpg')",
				"hero-pc": "url('/assets/hero-pc-landscape.jpeg')",
				"custom-gradient":
					"linear-gradient(to bottom, #020024, #090979, #00d4ff)",
			},
			fontFamily: {
				orbitron: "Orbitron",
				russo: "Russo One",
				roboto: "Roboto Mono",
			},
		},
	},
	plugins: [],
};
