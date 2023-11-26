const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
	mode: "development",
	entry: {
		app: "./src/index.js",
	},
	output: {
		filename: "static/[name].[hash].js",
		path: path.resolve(__dirname, "dist"),
		publicPath: "/",
	},
	devtool: "source-map",
	module: {
		rules: [
			{
				test: /\.(js)$/,
				exclude: /node_modules/,
				use: ["babel-loader"],
			},
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
			},
		],
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				vendor: {
					chunks: "initial",
					test: "vendor",
					name: "vendor",
					enforce: true,
				},
			},
		},
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "styles/styles.css",
		}),
		new HtmlWebpackPlugin({
			template: "public/index.html",
			favicon: "public/favicon.ico",
		}),
		new CopyWebpackPlugin({
			patterns: [
				{ from: "./public/manifest.json", to: "manifest.json" },
				{ from: "./public/content.js", to: "content.js" },
				{ from: "./public/sw.js", to: "sw.js" },
				{ from: "./public/yt-music-crawler.js", to: "yt-music-crawler.js" },
				{ from: "./public/icons", to: "icons" },
			],
		}),
	],
};
