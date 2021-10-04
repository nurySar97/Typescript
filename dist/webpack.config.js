var path = require('path');
var isDev = false;
var HtmlWebpackPlugin = require('html-webpack-plugin');
var filename = function (ext) { return (isDev ? "[name]." + ext : "[name].[hash]." + ext); };
module.exports = {
    mode: isDev ? 'development' : 'production',
    context: path.resolve(__dirname),
    entry: {
        main: ['@babel/polyfill', './src/index.ts']
    },
    output: {
        filename: filename('js'),
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js', '.tsx', '.ts'],
        alias: {
            '@models': path.resolve(__dirname, 'src/models'),
            '@': path.resolve(__dirname, 'src')
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            minify: {
                collapseWhitespace: !isDev
            }
        })
    ],
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    }
};
