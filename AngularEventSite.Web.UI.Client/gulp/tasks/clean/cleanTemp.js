module.exports = function(gulp, options, plugins) {
    gulp.task("clean:Temp",
        function () {
            return plugins.del([options.distPath]);
        });
};