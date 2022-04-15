const colors = require("tailwindcss/colors");

module.exports = {
	content: ["./src/**/*.{ts,tsx,css}"],
	theme: {
		colors: {
			...colors,
			pink: "#DCB0FF",
			silver: "rgba(210, 228, 255, 0.95)",
			black: "#000000",
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
	mode: "jit",
};
