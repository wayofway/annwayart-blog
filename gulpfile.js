var gulp = require('gulp');

//Plugins模块获取
var minifycss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var minifyhtml = require('gulp-minify-html');
var smushit = require('gulp-smushit');
// 压缩 public 目录 css文件
gulp.task('minify-css', function () {
    return gulp.src('./public/**/*.css')
        .pipe(minifycss())
        .pipe(gulp.dest('./public'));
});

// 压缩 public 目录 html文件
gulp.task('minify-html', function () {
    return gulp.src('./public/**/*.html')
        .pipe(minifyhtml())
        .pipe(gulp.dest('./public'))
});
// 压缩 public/js 目录 js文件
gulp.task('minify-js', function () {
    return gulp.src('./public/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./public'))
});
// 压缩图片
gulp.task('minify-images', function() {
   return gulp.src('./public/images/*.{jpeg,jpg,png}')
   .pipe(smushit())
   .pipe(gulp.dest('./public/images'));

});

// 分别执行css、images、html、js的压缩任务
gulp.task('default', gulp.parallel('minify-css', 'minify-images', 'minify-html', 'minify-js' ));