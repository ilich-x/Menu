"use strict"

var gulp = require('gulp');
var pug = require('gulp-pug');
// var watch = require('gulp-watch'); //стандартный
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');// Подключаем библиотеку для автоматического добавления префиксов
var plumber = require('gulp-plumber');

gulp.task('pug', function() {
    gulp.src(['./src/**/*.pug', '!./src/templates/**/*'])
    .pipe(plumber())
    .pipe(pug({
        pretty: true
    }))
    .pipe(gulp.dest('./dist'))
});

gulp.task('sass', function(){
    gulp.src('./src/*.sass')
    .pipe(plumber())
    .pipe(sass())
    .pipe(sass({errLogToConsole: true}))
    .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) // Создаем префиксы
    .pipe(gulp.dest('./dist'))
});

gulp.task('watch', function(){
    gulp.watch('src/**/*.pug', ['pug'])
    gulp.watch('src/**/*.sass', ['sass'])

});


gulp.task('default', ['pug', 'sass', 'watch']);
