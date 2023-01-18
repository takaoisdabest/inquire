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
			},
			boxShadow: {
				under: "inset 0 -5px 0 0 #6c63ff",
				hidden: "inset 0 0 0 0 #6c63ff",
				top: "0 3px 10px 0 rgba(0,0,0,0.75)"
			}
		}
	},
	plugins: []
};
