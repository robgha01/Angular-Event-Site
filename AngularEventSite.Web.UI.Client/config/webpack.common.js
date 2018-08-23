var Webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var DefinePlugin = require("webpack/lib/DefinePlugin");
var ProgressBarPlugin = require("progress-bar-webpack-plugin");
var Chalk = require("chalk");
var WebpackMd5Hash = require("webpack-md5-hash");
var Helpers = require("./helpers");
var CopyWebpackPlugin = require("copy-webpack-plugin");

/**
 * Webpack Constants
 */
var OutputPath = Helpers.root("dist");

var MainSet = function () {
    /**
     * Config
     * Reference: http://webpack.github.io/docs/configuration.html
     * This is the object where all configuration gets set
     */
    var config = {};

    config.output = {
        path: OutputPath,
        filename: "assets/[name]-[hash].js",
        chunkFilename: "assets/[chunkhash].[id].chunk.js"
    };

    /**
     * Entry
     * Reference: http://webpack.github.io/docs/configuration.html#entry
     * // "bootstrap-loader",
     */
    config.entry = {
        "main": [
            "./src/typescript/polyfills.browser.ts",
            "./src/typescript/vendor.browser.ts",
            "./src/typescript/main.browser.ts"
        ]
    };

    /**
     * Externals http://localhost:3100/1.8b13a08ae0e028990f0b.hot-update.js
     * Define all external libraries that should not get included by webpack. "library":"acessor" ex: "jquery": "jQuery"
     * Reference: http://webpack.github.io/docs/configuration.html#externals
     */
    config.externals = [];

    /**
     * Resolve
     * Reference: http://webpack.github.io/docs/configuration.html#resolve
     */
    config.resolve = {
        // only discover files that have those extensions
        extensions: [".ts", ".js", ".json", ".css", ".scss", ".html", ".webpack.js", ".web.js"],

        // An array of directory names to be resolved to the current directory
        modules: [Helpers.root("src"), Helpers.root("node_modules")],

        alias: {
            // This is a fix until thay release 5.0 (https://github.com/imakewebthings/waypoints/pull/481)
            "waypoints": "waypoints/lib"
        }
    }

    /**
     * Loaders
     * Reference: http://webpack.github.io/docs/configuration.html#module-loaders
     * List: http://webpack.github.io/docs/list-of-loaders.html
     * This handles most of the magic responsible for converting modules
     */
    config.module = {
        /**
         * Reference: https://webpack.js.org/configuration/module/
         */
        rules: [

            // This is a workaround untill thay release's the fix... (https://github.com/HubSpot/pace/issues/328)
            {
                test: require.resolve("pace-progress"),
                loader: "imports-loader?define=>false"
            },

            // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
            {
                test: /\.ts(x?)$/,
                exclude: [/\.(spec|e2e)\.ts$/, /node_modules\/(?!(ng2-.+))/],
                loaders: ["awesome-typescript-loader", "angular2-template-loader"]
            },

            // copy site assets to output.
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                exclude: Helpers.root("src", "typescript"),
                loaders: [
                    {
                        loader: "file-loader",
                        options: {
                            context: Helpers.root("src", "assets"),
                            name: `./${Helpers.isProduction ? "static/" : ""}assets/[path][name].[ext]`
                        }
                    },
                    {
                        loader: "img-loader"
                    }
                ]
            },

            // copy typescript assets to output
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                include: Helpers.root("src", "typescript"),
                loaders: [
                    {
                        loader: "file-loader",
                        options: {
                            context: Helpers.root("src", "typescript"),
                            name: `./${Helpers.isProduction ? "static/" : ""}assets/[path][name].[ext]`
                        }
                    },
                    {
                        loader: "img-loader"
                    }
                ]
            },

            /*
             * Bootstrap 4 loader
             */
            {
                test: /bootstrap\/dist\/js\/umd\//,
                use: "imports-loader?jQuery=jquery"
            },

            // support for .html as raw text
            {
                test: /\.html$/,
                loader: "raw-loader"
            }
        ]
    };

    if (Helpers.isProduction) {
        config.module.rules.push({
            test: /\.(scss)$/i,
            // using "loader" instead of newer "use"
            use: ExtractTextPlugin.extract({
                loader: [
                    {
                        loader: "css-loader",
                        // current extract-text-plugin supports query not never options format
                        query: {
                            importLoaders: 3,
                            minimize: true,
                            // Even if disabled sourceMaps gets generated
                            sourceMap: false
                        }
                    },
                    { loader: "postcss-loader" },
                    { loader: "resolve-url-loader" },
                    {
                        loader: "sass-loader",
                        query: {
                            // Enable sourcemaps for resolve-url-loader to work properly
                            sourceMap: true
                        }
                    }
                ]
            })
        });

        config.module.rules.push({
            test: /\.(css)$/i,
            // using "loader" instead of newer "use"
            use: ExtractTextPlugin.extract({
                loader: [
                    {
                        loader: "css-loader",
                        // current extract-text-plugin supports query not never options format
                        query: {
                            importLoaders: 3,
                            minimize: true,
                            // Even if disabled sourceMaps gets generated
                            sourceMap: false
                        }
                    },
                    { loader: "postcss-loader" },
                    { loader: "resolve-url-loader" }
                ]
            })
        });

        // Support for CSS
        //config.module.rules.push({
        //    test: /\.css$/,
        //    loader: ExtractTextPlugin.extract({
        //        use: ["css-loader", "postcss-loader", "resolve-url-loader"]
        //    })
        //});

        //// support for .scss files
        //config.module.rules.push({
        //    test: /\.(scss|sass)$/,
        //    loader: ExtractTextPlugin.extract({
        //        fallback: "style-loader",
        //        use: ["css-loader", "postcss-loader", "resolve-url-loader", "sass-loader"]
        //    })
        //});
    } else {
        config.module.rules.push({
            test: /\.css$/,
            loaders: ["style-loader", "css-loader", "postcss-loader"]
        });

        config.module.rules.push(
            {
                test: /\.(scss|sass)$/,
                loaders: ["style-loader", "css-loader", "postcss-loader", "sass-loader"]
            });
    }

    /**
     * Plugins
     * Reference: http://webpack.github.io/docs/configuration.html#plugins
     * List: http://webpack.github.io/docs/list-of-plugins.html
     */
    config.plugins = [
        new Webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            Tether: "tether",
            "window.Tether": "tether",
            Tooltip: "exports-loader?Tooltip!bootstrap/js/dist/tooltip",
            Alert: "exports-loader?Alert!bootstrap/js/dist/alert",
            Button: "exports-loader?Button!bootstrap/js/dist/button",
            Carousel: "exports-loader?Carousel!bootstrap/js/dist/carousel",
            Collapse: "exports-loader?Collapse!bootstrap/js/dist/collapse",
            Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown",
            Modal: "exports-loader?Modal!bootstrap/js/dist/modal",
            Popover: "exports-loader?Popover!bootstrap/js/dist/popover",
            Scrollspy: "exports-loader?Scrollspy!bootstrap/js/dist/scrollspy",
            Tab: "exports-loader?Tab!bootstrap/js/dist/tab",
            Util: "exports-loader?Util!bootstrap/js/dist/util"
        }),
        new ProgressBarPlugin({
            format: "  build [:bar] " + Chalk.green.bold(":percent") + " (:msg)",
            clear: false
        }),

        // Need this plugin for deterministic hashing
        // until this issue is resolved: https://github.com/webpack/webpack/issues/1315
        // for more info: https://webpack.js.org/how-to/cache/
        new WebpackMd5Hash(),

        /**
        * Plugin: ContextReplacementPlugin
        * Description: Provides context to Angular's use of System.import
        *
        * See: https://webpack.github.io/docs/list-of-plugins.html#contextreplacementplugin
        * See: https://github.com/angular/angular/issues/11580
        * Source: https://github.com/AngularClass/angular2-webpack-starter/blob/master/config/webpack.common.js
        */
        new Webpack.ContextReplacementPlugin(
            // The (\\|\/) piece accounts for path separators in *nix and Windows
            /angular(\\|\/)core(\\|\/)@angular/,
            Helpers.root("src"), // location of your src
            {
                // your Angular Async Route paths relative to this root directory
            }
        ),

        /*
         * Plugin: CommonsChunkPlugin
         * Description: Shares common code between the pages.
         * It identifies common modules and put them into a commons chunk.
         *
         * See: https://webpack.github.io/docs/list-of-plugins.html#commonschunkplugin
         * See: https://github.com/webpack/docs/wiki/optimization#multi-page-app
         */

        //new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 15 }),
        //new webpack.optimize.MinChunkSizePlugin({ minChunkSize: 10000 }),
        new Webpack.optimize.CommonsChunkPlugin({
            name: "manifest.js"
        }),
        new Webpack.optimize.CommonsChunkPlugin({
            names: ["common"],
            minChunks: function (module, count) {
                return !Helpers.isExternal(module) && count >= 2; // adjustable cond
            }
        }),
        new Webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            chunks: ["main", "common"],
            minChunks: function (module) {
                return Helpers.isExternal(module);
            }
        }),

        /**
        * Plugin: DefinePlugin
        * Description: Define free variables.
        * Useful for having development builds with debug logging or adding global constants.
        *
        * Environment helpers
        *
        * See: https://webpack.github.io/docs/list-of-plugins.html#defineplugin
        */
        // NOTE: when adding more properties, make sure you include them in custom-typings.d.ts
        new DefinePlugin({
            "ENV": JSON.stringify(Helpers.Env),
            "process.env": {
                "ENV": JSON.stringify(Helpers.Env),
                "NODE_ENV": JSON.stringify(Helpers.Env)
            }
        })
    ];

    /*
     * Include polyfills or mocks for various node stuff
     * Description: Node configuration
     *
     * See: https://webpack.github.io/docs/configuration.html#node
     */
    config.node = {
        global: true,
        crypto: "empty",
        process: true,
        module: false,
        clearImmediate: false,
        setImmediate: false
    }

    return config;
}();

var ThemesSet = function () {
    /**
     * Config
     * Reference: http://webpack.github.io/docs/configuration.html
     * This is the object where all configuration gets set
     */
    var config = {};

    config.output = {
        path: OutputPath,
        filename: "assets/[name]-[hash].css",
        chunkFilename: "assets/[chunkhash].[id].chunk.css"
    };

    /**
     * Entry
     * Reference: http://webpack.github.io/docs/configuration.html#entry
     * If you want a faster compile time for production builds comment out the themes that should not be a part of the build bellow.
     */
    config.entry = {
        "spaceBlue-wallpaper": ["./src/sass/spaceBlue-wallpaper.scss"]
    };

    /**
     * Externals http://localhost:3100/1.8b13a08ae0e028990f0b.hot-update.js
     * Define all external libraries that should not get included by webpack. "library":"acessor" ex: "jquery": "jQuery"
     * Reference: http://webpack.github.io/docs/configuration.html#externals
     */
    config.externals = [];

    /**
     * Resolve
     * Reference: http://webpack.github.io/docs/configuration.html#resolve
     */
    config.resolve = {
        // only discover files that have those extensions
        extensions: [".ts", ".js", ".json", ".css", ".scss", ".html", ".webpack.js", ".web.js"],

        // An array of directory names to be resolved to the current directory
        modules: [Helpers.root("src"), Helpers.root("node_modules")]
    }

    /**
     * Loaders
     * Reference: http://webpack.github.io/docs/configuration.html#module-loaders
     * List: http://webpack.github.io/docs/list-of-loaders.html
     * This handles most of the magic responsible for converting modules
     */
    config.module = {
        /**
         * Reference: https://webpack.js.org/configuration/module/
         */
        rules: [

            // copy site assets to output.
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loaders: [
                    {
                        loader: "file-loader",
                        options: {
                            context: Helpers.root("src", "assets"),
                            name: `./${Helpers.isProduction ? "static/" : ""}assets/[path][name].[ext]`
                        }
                    },
                    {
                        loader: "img-loader"
                    }
                ]
            }
        ]
    };

    if (Helpers.isProduction) {
        // Support for CSS as raw text
        config.module.rules.push({
            test: /\.css$/,
            loader: ExtractTextPlugin.extract({
                use: ["css-loader", "postcss-loader", "resolve-url-loader"]
            })
        });

        // support for .scss files
        config.module.rules.push({
            test: /\.(scss|sass)$/,
            loader: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: ["css-loader", "postcss-loader", "resolve-url-loader", "sass-loader"]
            })
        });
    } else {
        config.module.rules.push({
            test: /\.css$/,
            loaders: ["style-loader", "css-loader", "postcss-loader"]
        });

        config.module.rules.push(
            {
                test: /\.(scss|sass)$/,
                loaders: ["style-loader", "css-loader", "postcss-loader", "sass-loader"]
            });
    }

    /**
     * Plugins
     * Reference: http://webpack.github.io/docs/configuration.html#plugins
     * List: http://webpack.github.io/docs/list-of-plugins.html
     */
    config.plugins = [
        new ProgressBarPlugin({
            format: "  build [:bar] " + Chalk.green.bold(":percent") + " (:msg)",
            clear: false
        }),

        // Need this plugin for deterministic hashing
        // until this issue is resolved: https://github.com/webpack/webpack/issues/1315
        // for more info: https://webpack.js.org/how-to/cache/
        new WebpackMd5Hash(),

        /*
         * Plugin: copyWebpackPlugin
         * Description: This is a webpack plugin that copies individual files or entire directories to the build directory.
         *
         * See: https://github.com/kevlened/copy-webpack-plugin
         */
        new CopyWebpackPlugin([
            // Copy directory contents to {output}/themes
            // { from: "./src/assets/themes", to: `./${Helpers.isProduction ? "static/" : ""}assets/themes` }
            { from: "./src/assets", to: `./${Helpers.isProduction ? "static/" : ""}assets` }
        ],
            {
                // A path that determines how to interpret the from path
                context: Helpers.root("src", "assets")
            }),

        /**
        * Plugin: DefinePlugin
        * Description: Define free variables.
        * Useful for having development builds with debug logging or adding global constants.
        *
        * Environment helpers
        *
        * See: https://webpack.github.io/docs/list-of-plugins.html#defineplugin
        */
        // NOTE: when adding more properties, make sure you include them in custom-typings.d.ts
        new DefinePlugin({
            "ENV": JSON.stringify(Helpers.Env),
            "process.env": {
                "ENV": JSON.stringify(Helpers.Env),
                "NODE_ENV": JSON.stringify(Helpers.Env)
            }
        })
    ];

    /*
     * Include polyfills or mocks for various node stuff
     * Description: Node configuration
     *
     * See: https://webpack.github.io/docs/configuration.html#node
     */
    config.node = {
        global: true,
        crypto: "empty",
        process: true,
        module: false,
        clearImmediate: false,
        setImmediate: false
    }

    return config;
}();

module.exports = { MainSet, ThemesSet };
