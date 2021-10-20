const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssStractPlugin = require('mini-css-extract-plugin');

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/',
	},
	resolve: {
		extensions: ['.js', '.jsx'],
		alias: {
			'@components': path.resolve(
				__dirname,
				'src/components/'
			),
			'@containers': path.resolve(
				__dirname,
				'src/containers/'
			),
			'@pages': path.resolve(__dirname, 'src/pages/'),
			'@styles': path.resolve(__dirname, 'src/styles/'),
			'@icons': path.resolve(
				__dirname,
				'src/assets/icons/'
			),
			'@logos': path.resolve(
				__dirname,
				'src/assets/logos/'
			),
			'@helpers': path.resolve(__dirname, 'src/helpers/'),
		},
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader',
					},
				],
			},
			{
				test: /\.(css|scss)$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.(woff(2)?|ttf|eot|svg|png)(\?v=\d+\.\d+\.\d+)?$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'fonts/',
						},
					},
				],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
			filename: './index.html',
		}),
		new MiniCssStractPlugin({
			filename: '[name].css',
		}),
	],
	devServer: {
		historyApiFallback: true,
	},
};
