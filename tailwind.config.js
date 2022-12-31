/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				righteous: ["Righteous", "cursive"]
			},
			colors: {
				accent: "#6c63ff"
			}
		}
	},
	plugins: []
};
