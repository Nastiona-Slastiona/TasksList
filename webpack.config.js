const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


const isDevelopmentMode = process.env.NODE_ENV === 'development';

const generateStyleLoader = loaderName => {
    return [
        MiniCssExtractPlugin.loader,
        {
            loader: 'css-loader',
            options: {
                modules: false,
                importLoaders: 2,
                sourceMap: isDevelopmentMode
            }
        },
        {
            loader: 'postcss-loader',
            options: {
                sourceMap: isDevelopmentMode
            }
        },
        {
            loader: loaderName,
            options: {
                sourceMap: isDevelopmentMode,
                sassOptions: {
                    includePaths: ['src', 'node_modules']
                }
            }
        }
    ];
};

module.exports = {
    mode: 'development',
    entry: ['babel-polyfill', './src/index.js'],
    output: {
        path: path.resolve(__dirname, 'static'),
        filename: 'bundle.js'
    },
    devServer: {
        port: 3000,
        hot: true
    },
    plugins: [
        new HTMLWebpackPlugin({ template: './index.html' }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.js$|jsx/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.s?css$/i,
                use: generateStyleLoader('sass-loader')
            }
        ]
    },
    resolve: {
        alias: {
            components: path.resolve(__dirname, 'src/components'),
            models: path.resolve(__dirname, 'src/models'),
            store: path.resolve(__dirname, 'src/store'),
            src: path.resolve(__dirname, 'src')
        },
        enforceExtension: false,
        extensions: ['.jsx', '.js', '.css', 'wasm', '...']
    }
};
