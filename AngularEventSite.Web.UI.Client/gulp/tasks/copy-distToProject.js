module.exports = function(gulp, options, plugins) {
    gulp.task("copy:distToProject",
        function() {
            return gulp.src(options.distPath + "**/*",
                {
                    "base": "./dist/static"
                })
                .pipe(gulp.dest(options.webUiPath));
        });
};