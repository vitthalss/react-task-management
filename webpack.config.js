const path = require('path');
const webpack = require('webpack');

module.exports = {
	context: path.resolve('src/'),
	entry: ["./index"],
	output: {
		path: path.resolve('build/js/'),
		publicPath: '/public/',
		filename:  "bundle.js"
	},
	devServer: {
		contentBase: 'public'
	},
	module: {
	    rules: [
	      {
	        test: /\.css$/,
	        use: [ 'style-loader', 'css-loader' ]
	      },
	    ],
	    preLoaders: [
	      {
	        test: /\.js(x)?$/,
	        exclude: /node_modules/,
	        loader: 'eslint-loader'
	      }
	    ],
		loaders: [
			{
				test: /\.css$/,
				loaders: ['style-loader', 'css-loader']
			},
		      {
		        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
		        loader: "url-loader?limit=10000&mimetype=application/font-woff"
		      }, {
		        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
		        loader: "url-loader?limit=10000&mimetype=application/font-woff"
		      }, {
		        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
		        loader: "url-loader?limit=10000&mimetype=application/octet-stream"
		      }, {
		        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
		        loader: "file-loader"
		      }, {
		        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
		        loader: "url-loader?limit=10000&mimetype=image/svg+xml"
		      },
			{
		    test: /\.js(x)?$/,         
		    exclude: /node_modules/,
		    loader: "babel",
		    query:
		      {
		        presets:['es2015', 'react'],
		        plugins:['transform-decorators-legacy']
		      }
			},
			{
		    test: /\.json$/,        
		    loader: "json-loader"
			}
		]
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
/*    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': "'production'"
            }
        }),
    ],
*/	// linting
		eslint: {
		emitError: true,
		emitWarning: true,
		failOnError: true,
		failOnWarning: false
	}
}
