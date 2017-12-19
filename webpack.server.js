const path = require('path');

module.exports = {
	// Inform webpack that we are building a bundle for nodeJs,rather than for the browser
	target: 'node',

	// root file of server application
	entry: './src/index.js',

	// where to put the output file that is generated

	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname,'build')
	},
	// Run babel on every file

	module: {
		rules: [
		{
			test: /\.js?$/,
			loader: 'babel-loader',
			exclude: /node_modules/,
			options: {
				presets: [
					'react',
					'stage-0',
					['env',{targets:{browsers:['last 2 versions'] }}]
				]
			}
		}
		]

	}
}