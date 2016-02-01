var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('default', function() {
    console.log('here');        
});

gulp.task('scripts', function() {
    // 將 ./src/js 目錄底下所有的 .js 合併成 main.js
    // 接著將 main.js 更名為 main.min.js
    // 然後進行 JavsScript 程式碼的壓縮，最後存於 ./build/js 目錄
    return gulp.src('src/js/*.js')tf
            .pipe(concat('main.js'))
            .pipe(rename({suffix: '.min'}))
            .pipe(uglify())
            .pipe(gulp.dest('./build/js'));        
});

gulp.task('default', ['scripts']);



var less = require('gulp-less');
var path = require('path');

gulp.task('less', function() {
    gulp.src('src/less/**/*.less')
        .pipe(less({
            paths: [path.join(__dirname, 'less', 'includes')]
        }))
        .pipe(gulp.dest('./build/css'));
});

gulp.task('default', ['less']);


var imagemin = rquire('gulp-imagemin');

gulp.task('images', function() {
    return gulp.src('src/imags/**/*')
        .pipe(cache(imagemin({
            optimizationLevel: 5,
            progressive: true,
            interlaced: true
        })))
        .pipe(gulp.dest('./build/img'));
});

gulp.task('default', ['scripts', 'less', 'images']);


