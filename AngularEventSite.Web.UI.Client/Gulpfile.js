/// <binding />
/**
 * Use babel to transpile our requires.
 */
require("babel-register");
var Gulp = require("gulp"),
    Plugins = require("gulp-load-plugins")({
        pattern: ["gulp-*", "gulp.*", "vinyl-*", "del", "webpack-stream", "merge-stream", "browser-sync"]
    }),
    BrowserSync = require("browser-sync").create(),
    webpack = require("webpack"),
    webpackDevMiddleware = require("webpack-dev-middleware"),
    webpackHotMiddleware = require("webpack-hot-middleware"),
    WebpackDevServer = require("webpack-dev-server"),
    Options = require("./gulp/config"),
    helpers = require("./config/helpers"),
    constants = require("./config/constants");

// Default to dev
helpers.SetDevEnvironment();

require("load-gulp-tasks")(Gulp, Options, Plugins);

/**
 * Builds a development build.
 */
Gulp.task("default", function (callback) {
    return Plugins.sequence("clean:Temp", "webpack", "copy:distToProject")(function () {
        BrowserSync.reload();
        callback();
    });
});

/**
 * Builds a production build.
 */
Gulp.task("build-production", function () {
    helpers.SetProdEnvironment();
    return Plugins.sequence("clean:Temp", "webpack")(function () {
        // Copy over the static assets files.
        return Gulp.src(constants.metadata.assetsGlob, { base: "./src/assets" }).pipe(Gulp.dest(constants.metadata.assetsOutPath));
    });
});

/**
 * Builds a production build to local.
 */
Gulp.task("build:local:prod", function () {
    helpers.SetProdEnvironment();
    return Plugins.sequence("clean:Temp", "webpack", "copy:distToProject")(function () {
        // Copy over the static assets files.
        return Gulp.src(constants.metadata.assetsGlob, { base: "./src/assets" }).pipe(Gulp.dest(constants.metadata.assetsOutPath));
    });
});

/**
 * Start development proxy server
 */
Gulp.task("watch-sync", function () {
    Options.webpack.requiredInstance.watch = true;
    let output = Options.webpack.config[0].output;

    for (let i = 0; i < Options.webpack.config.length; i++) {
        for (let entry of Object.keys(Options.webpack.config[i].entry)) {
            // Add the webpack dev and webpack hot to main script.
            Options.webpack.config[i].entry[entry].unshift("webpack-dev-server/client?" + Options.webpack.config[i].output.publicPath, "webpack/hot/dev-server");
        }

        // Add the HotModuleReplacementPlugin.
        Options.webpack.config[i].plugins.unshift(new webpack.HotModuleReplacementPlugin()); //{ multiStep: true }
    }

    var compiler = Options.webpack.requiredInstance(Options.webpack.config);
    var server = new WebpackDevServer(compiler,
    {
        // Reference: https://webpack.js.org/configuration/dev-server/
        // This is required and must be same as publicPath in webconfig.
        publicPath: output.publicPath,

        /**
         * Enable special support for Hot Module Replacement
         * Page is no longer updated, but a "webpackHotUpdate" message is sent to the content
         * Use "webpack/hot/dev-server" as additional module in your entry point
         * Note: this does _not_ add the `HotModuleReplacementPlugin` like the CLI option does.
         */
        hot: true,

        /**
         * Set this if you want to enable gzip compression for assets.
         */
        //compress: true,

        /**
         * Console output
         * Values: { colors: true } "errors-only"
         */
        stats: { colors: true, cached: false },

        /**
         * Control the console log messages shown in the browser when using inline mode.
         * Can be `error`, `warning`, `info` or `none`.
         */
        clientLogLevel: "error"

        /**
         * Set this if you want webpack-dev-server to delegate a single path to an arbitrary server.
         * Use "**" to proxy all paths to the specified server.
         * This is useful if you want to get rid of 'http://localhost:8080/' in script[src],
         * and has many other use cases (see https://github.com/webpack/webpack-dev-server/pull/127 ).
         */
        //proxy: {
        //    "!/**/*.{css,js,hot-update.json}|!/sockjs-node/**":
        //    {
        //        target: "http://specialistportalen.se.local/",
        //        secure: false,
        //        changeOrigin: true
        //    }
        //}

        /**
         * Enable history API fallback so HTML5 History API based
         * routing works. This is a good default that will come
         * in handy in more complicated setups.
         */
        //historyApiFallback: true,
    });

    server.listen(constants.webpackDevServer.port, constants.webpackDevServer.host, function (err) {
        if (err) {
            throw new Plugins.util.PluginError("webpack-dev-server", err);
        }

        // Server listening localhost:3100
        Plugins.util.log("[webpack-dev-server]", output.publicPath + "webpack-dev-server/");
    });
});
