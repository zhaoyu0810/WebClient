import * as path from 'path';
import { Configuration, DefinePlugin } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const webpackConfig = (): Configuration => ({
    entry: './src/index.tsx',
    ...(process.env.production || !process.env.development
        ? {}
        : { devtool: 'eval-source-map' }),

    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })],
    },
    output: {
        path: path.join(__dirname, '/build'),
        filename: 'build.[contenthash].js',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    transpileOnly: true,
                },
                exclude: /build/,
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
        ],
    },
    devServer: {
        port: 8080,
        open: true,
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            // HtmlWebpackPlugin simplifies creation of HTML files to serve your webpack bundles
            template: './public/index.html',
        }),
        // DefinePlugin allows you to create global constants which can be configured at compile time
        new DefinePlugin({
            'process.env': process.env.production || !process.env.development,
        }),
        new ForkTsCheckerWebpackPlugin({
            // Speeds up TypeScript type checking and ESLint linting (by moving each to a separate process)
            eslint: {
                files: './src/**/*.{ts,tsx,js,jsx}',
            },
        }),
        new BundleAnalyzerPlugin({ analyzerMode: 'static', openAnalyzer: false })
    ],
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        '@ant-design/charts': 'charts',
        'antd': 'antd',
        'moment': 'moment'
    }
});

export default webpackConfig;
