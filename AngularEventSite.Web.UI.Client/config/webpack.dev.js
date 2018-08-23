var Webpack = require("webpack");
var WebpackMerge = require("webpack-merge");
var BrowserSyncPlugin = require("browser-sync-webpack-plugin");
var BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
var CommonConfig = require("./webpack.common.js");
var Constants = require("./constants");
var CommonMerges = require("./webpack.common.merges");
import AssetsPlugin from "assets-webpack-plugin";
import Helpers from "./helpers";

module.exports = [
    /**
    * Main 
    */
    WebpackMerge(CommonConfig.MainSet,
    {
        performance: {
            hints: false
        },

        devtool: "cheap-module-source-map",

        output: {
            publicPath: Constants.publicPath,
            filename: "assets/[name].js" // assets-webpack-plugin do not support hot module reloading see issue:  
        },

        module: {
            rules: [
                {
                    test: /\.ts$/,
                    enforce: "pre",
                    loader: "tslint-loader"
                },
                {
                    test: /\.js$/,
                    enforce: "pre",
                    exclude: /(node_modules|bower_components)/,
                    loader: "source-map-loader"
                }
            ]
        },

        plugins: [
            new AssetsPlugin({
                filename: "assets.json",
                path: Helpers.root("assets"),
                includeManifest: "manifest",
                fullPath: true
            }),

            // Uncoment to analyze the bundle size
            // new BundleAnalyzerPlugin({ openAnalyzer: true }),
            new Webpack.NoEmitOnErrorsPlugin(),
            new BrowserSyncPlugin({
                    host: Constants.browserSync.host,
                    port: Constants.browserSync.port,
                    proxy: Constants.browserSync.proxy,
                    open: "external",
                    notify: false,

                    /**
                     * Clicks, Scrolls & Form inputs on any device will be mirrored to all others. if set to true
                     */
                    ghost: true,

                    snippetOptions: {
                        ignorePaths: ["umbraco/**", "umbraco_client/**", "umbraco/Surface/AjaxHelper/GetEncryptedRoute"]
                    }
                },
                {
                    // Plugin Options

                    // prevent BrowserSync from reloading the page
                    // and let Webpack Dev Server take care of this
                    reload: false
                }),

            // plugins configuration for webpack 2
            new Webpack.LoaderOptionsPlugin(CommonMerges.mergeLoaderOptions({
                options: {
                    debug: true,

                    /**
                     * Apply the tslint loader as pre/postLoader
                     * Reference: https://github.com/wbuchwalter/tslint-loader
                     */
                    tslint: {
                        emitErrors: false,
                        failOnHint: false
                    }
                }
            })),

            // prints more readable module names in the browser console on HMR updates
            new Webpack.NamedModulesPlugin()
        ]
    }),

    /**
    * Themes 
    */
    WebpackMerge(CommonConfig.ThemesSet,
    {
        performance: {
            hints: false
        },

        devtool: "cheap-module-source-map",

        output: {
            publicPath: Constants.publicPath,
            filename: "assets/[name].js" // assets-webpack-plugin do not support hot module reloading see issue:  
        },

        module: {
            rules: [
                {
                    test: /\.ts$/,
                    enforce: "pre",
                    loader: "tslint-loader"
                },
                {
                    test: /\.js$/,
                    enforce: "pre",
                    exclude: /(node_modules|bower_components)/,
                    loader: "source-map-loader"
                }
            ]
        },

        plugins: [
            new AssetsPlugin({
                filename: "themes.json",
                path: Helpers.root("assets"),
                includeManifest: "manifest",
                fullPath: true
            }),

            // Uncoment to analyze the bundle size
            // new BundleAnalyzerPlugin({ openAnalyzer: true }),
            new Webpack.NoEmitOnErrorsPlugin(),
            
            // plugins configuration for webpack 2
            new Webpack.LoaderOptionsPlugin(CommonMerges.mergeLoaderOptions({
                options: {
                    debug: true,

                    /**
                     * Apply the tslint loader as pre/postLoader
                     * Reference: https://github.com/wbuchwalter/tslint-loader
                     */
                    tslint: {
                        emitErrors: false,
                        failOnHint: false
                    }
                }
            })),

            // prints more readable module names in the browser console on HMR updates
            new Webpack.NamedModulesPlugin()
        ]
    })
];
