import Webpack from "webpack";
import CommonConfig from "./webpack.common.js";
import AssetsPlugin from "assets-webpack-plugin";
import Helpers from "./helpers";
import CommonMerges from "./webpack.common.merges";
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const BabiliPlugin = require("babili-webpack-plugin");
var WebpackMerge = require("webpack-merge");

module.exports = [
    /**
    * Main
    */
    WebpackMerge(CommonConfig.MainSet,
    {
        devtool: "source-map",

        output: {
            path: Helpers.root("dist"),
            publicPath: "/",
            filename: "static/assets/[name]-[hash].min.js",
            chunkFilename: "static/assets/[chunkhash].[id].chunk.js"
        },

        plugins: [
            new AssetsPlugin({
                filename: "assets.json",
                path: Helpers.root("dist", "static", "assets"),
                includeManifest: "manifest",
                fullPath: true
            }),

            // plugins configuration for webpack 2
            new Webpack.LoaderOptionsPlugin(CommonMerges.mergeLoaderOptions({
                options: {
                    debug: false
                }
            })),
            new Webpack.NoEmitOnErrorsPlugin(),
            new BabiliPlugin({ // https://github.com/babel/babili/tree/master/packages/babel-preset-babili#options
                    unsafe: false,
                    evaluate: true,
                    deadcode: true,
                    infinity: true,
                    numericLiterals: true,
                    replace: false,
                    mergeVars: true,
                    booleans: true,
                    regexpConstructors: true,
                    removeConsole: true,
                    removeDebugger: true,
                    removeUndefined: false,
                    undefinedToVoid: true,
                    mangle: {
                        keepFnName: true,
                        keepClassName: true
                    }
                },
                {
                    // https://github.com/webpack-contrib/babili-webpack-plugin
                    test: /\.js($|\?)/i
                }),

            // Extract css files
            // Reference: https://github.com/webpack/extract-text-webpack-plugin
            new ExtractTextPlugin({ filename: "static/assets/[name]-[hash].css", allChunks: true })
        ]
    }),

    /**
    * Themes
    */
    WebpackMerge(CommonConfig.ThemesSet,
    {
        devtool: "source-map",

        output: {
            path: Helpers.root("dist"),
            publicPath: "/",
            filename: "static/assets/[name]-[hash].min.js",
            chunkFilename: "static/assets/[chunkhash].[id].chunk.js"
        },

        plugins: [
            new AssetsPlugin({
                filename: "themes.json",
                path: Helpers.root("dist", "static", "assets"),
                includeManifest: "manifest",
                fullPath: true
            }),

            // plugins configuration for webpack 2
            new Webpack.LoaderOptionsPlugin(CommonMerges.mergeLoaderOptions({
                options: {
                    debug: false
                }
            })),
            new Webpack.NoEmitOnErrorsPlugin(),
            new BabiliPlugin({ // https://github.com/babel/babili/tree/master/packages/babel-preset-babili#options
                    unsafe: false,
                    evaluate: true,
                    deadcode: true,
                    infinity: true,
                    numericLiterals: true,
                    replace: false,
                    mergeVars: true,
                    booleans: true,
                    regexpConstructors: true,
                    removeConsole: true,
                    removeDebugger: true,
                    removeUndefined: false,
                    undefinedToVoid: true,
                    mangle: {
                        keepFnName: true,
                        keepClassName: true
                    }
                },
                {
                    // https://github.com/webpack-contrib/babili-webpack-plugin
                    test: /\.js($|\?)/i
                }),

            // Extract css files
            // Reference: https://github.com/webpack/extract-text-webpack-plugin
            new ExtractTextPlugin({ filename: "static/assets/[name]-[hash].css", allChunks: true })
        ]
    })
];
