var gulp = require('gulp'),
    less = require('gulp-less'),
    cssmin = require('gulp-cssmin');

gulp.task('styles', function() {
    return gulp
        .src('./src/styles/main.less')
        .pipe(less())
        .pipe(cssmin())
        .pipe(gulp.dest('./src/styles/'));
});

gulp.task('watch', function() {
    gulp.watch('./src/styles/*.less', gulp.series('styles'));
});
