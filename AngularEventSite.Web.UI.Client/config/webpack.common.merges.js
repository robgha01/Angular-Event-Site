var WebpackMerge = require("webpack-merge");
var AutoPrefixer = require("autoprefixer");
var ResponsiveTypography = require("postcss-responsive-type");
var Constants = require("./constants");
var Helpers = require("./helpers");

module.exports = function () {
    var merges = {};

    merges.loaderOptions = function () {
        var loader = {
            options: {}
        };
        
        loader.options.context = Helpers.root("src");
        loader.options.output = {
            path: Constants.metadata.outputPath
        }

        loader.options.fileLoader = {
            //name: "[path][name].[ext]",
            outputPath: "assets",
            includePaths: [
                Helpers.root("src", "sass"), Helpers.root("src", "typescript"), Helpers.root("src", "assets")
            ]
        };

        loader.options.htmlLoader = {
            minimize: false // workaround for ng2
        };

        loader.options.sassLoader = {
            data: "$env: " + process.env.NODE_ENV + ";",
            outputStyle: "expanded",
            sourceMap: true,
            sourceMapContents: true
        };

        loader.options.imagemin = {
            gifsicle: { interlaced: false },
            jpegtran: {
                progressive: true,
                arithmetic: false
            },
            optipng: { optimizationLevel: 5 },
            pngquant: {
                floyd: 0.5,
                speed: 2
            },
            svgo: {
                plugins: [
                    { removeTitle: true },
                    { convertPathData: false }
                ]
            }
        };

        /**
         * PostCSS
         * Reference: https://github.com/postcss/autoprefixer-core
         * Add vendor prefixes to your css
         */
        loader.options.postcss = [
            AutoPrefixer({
                browsers: ["last 2 version"]
            }),
            ResponsiveTypography()
        ];

        return loader;
    }();

    merges.mergeLoaderOptions = function (target) {
        return WebpackMerge(merges.loaderOptions, target);
    }
    
    return merges;
}();