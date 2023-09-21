/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: "jit",
	darkMode: "class",
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}"
	],
	theme: {
		extend: {
			colors: {
				primary: "#00ff00",
				secondary: "#00b300",
				tertiary: "#bfffbf",
				quaternary: "#80ff80",

				bgPrimaryLight: "#ffffff",
				bgSecondaryLight: "#e0eaf0",
				ctnPrimaryLight: "#2e384d",
				ctnSecondaryLight: "#8c9db1",

				// bgPrimaryDark: "#181826",
				bgSecondaryDark: "#212134",
				ctnPrimaryDark: "#e5e6e9",
				ctnSecondaryDark: "#7e8c9f",

				// primary: "#050816",
				// secondary: "#aaa6c3",
				// tertiary: "#151030",
				// #181826, #212134
				"black-100": "#100d25",
				"black-200": "#090325",
				"white-100": "#f3f3f3"
			},
			boxShadow: {
				card: "0px 35px 120px -15px #211e35"
			},
			backgroundImage: {
				"hero-pattern": "url('/assets/herobg.png')",
				bgPrimaryDark:
					"linear-gradient(90deg, rgba(24,24,38,1) 0%, rgba(35,35,56,1) 50%, rgba(24,24,38,1) 100%)"
			},
			screens: {
				xs: "320px",
				sm: "640px",
				md: "768px",
				lg: "1024px",
				xl: "1280px"
			}
		}
	},
	plugins: []
};
