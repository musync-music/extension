const postcssPresetEnv = require("postcss-preset-env");
const tailwind = require("tailwindcss");

module.exports = {
	plugins: [
		postcssPresetEnv({
			browsers: [">0.25%", "not ie 11", "not op_mini all"],
		}),
		require("cssnano"),
		require("autoprefixer"),
		tailwind("./tailwind.config.js"),
	],
};
