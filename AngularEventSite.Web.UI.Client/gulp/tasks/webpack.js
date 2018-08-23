module.exports = function (gulp, options, plugins) {
    gulp.task("webpack",
        function () {
            const statsFunc = function(err, stats) {
                if (err) {
                    throw new plugins.util.PluginError("webpack", err);
                }
                plugins.util.log("[webpack]",
                    stats.toString({
                        // output console options
                        colors: true
                    }));
            };

            let compileMainSet = plugins.webpackStream(options.webpack.config[0], options.webpack.requiredInstance, statsFunc).pipe(gulp.dest(options.distPath));
            let compileThemeSet = plugins.webpackStream(options.webpack.config[1], options.webpack.requiredInstance, statsFunc).pipe(gulp.dest(options.distPath));

            return plugins.mergeStream(compileMainSet, compileThemeSet);
        });
};