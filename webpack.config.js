path = require("path");

module.exports = {
    entry: './src/app.js', 
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,                
                loader: 'babel-loader' //for a single loader and no options (or options in separate file), can use the loader directive                
            }, {
                test: /\.s?css$/, //with the ? the s is optional, so the rule works for both .css and .scss
                use: [ //use allows for multiple loaders and options
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    }
};