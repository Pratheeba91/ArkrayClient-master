var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader'
            },
			
			{ test: /\.css$/, 
			loader: "style-loader!css-loader" 
			},
            {
			  test: /\.(png|jpe?g|gif|jpg|webp)$/,
			  loader: 'file-loader',
			  options: {
				name: 'images/[name].[ext]'
            }
			}

        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html'
    })],
    devServer: {
        historyApiFallback: true
    },
    externals: {
        // global app config object
        config: JSON.stringify({
            apiUrl: 'http://localhost:4000'
        })
    },
	
 


}