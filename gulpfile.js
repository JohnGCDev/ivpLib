'use strict';
//This works for Gulp v
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync');

gulp.task('sass', function(){

    return gulp.src('./css/*.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});
gulp.task('sass_watch', function(){
    gulp.watch('./css/*.sass', ['sass']);
});
gulp.task('browser_sync', function(){
    var files = [
        './*.html',
        './css/*.css',
        './img/*.{png, jpg, gif}',
        './js/*.js'
    ];
    browserSync.init(files, {
        server: {
            baseDir: "./"
        }
    });
});
//Default task
gulp.task('default', ['browser_sync'], function(){
    gulp.start('sass_watch');
});