/**
 * Created by ibm on 2016/2/20.
 */
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    minifycss = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');

gulp.task('sass',function(){
    return gulp.src('sass/*.sass')
        .pipe(sass())
        .pipe(gulp.dest('css'));
});

gulp.task('minifycss', function() {
    return gulp.src('css/*.css')      //压缩的文件
        .pipe(concat('main.css'))
        .pipe(gulp.dest('minified/css'))   //输出文件夹
        .pipe(rename({suffix: '.min'}))    //rename压缩后的文件夹
        .pipe(minifycss())   //执行压缩
        .pipe(gulp.dest('minified/css'));

});

gulp.task('minifyjs', function() {
    return gulp.src('js/*.js')//压缩的文件
        .pipe(concat('main.js'))    //合并所有js到main.js
        .pipe(gulp.dest('minified/js'))    //输出main.js到文件夹
        .pipe(rename({suffix: '.min'}))   //rename压缩后的文件名
        .pipe(uglify())    //压缩
        .pipe(gulp.dest('minified/js'));//输出

});

gulp.task('default',['sass'],  function() {
    gulp.start('minifycss', 'minifyjs');
});