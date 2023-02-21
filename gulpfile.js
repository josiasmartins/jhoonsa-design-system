const gulp = require("gulp");
const babel = require('gulp-babel');
// const sass = require('gulp-sass');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');

gulp.task('js', () => {
  return gulp.src('src/**/*.js')
    .pipe(babel())
    .pipe(concat('app.js'))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('css', () => {
  return gulp.src('src/**/*.css')
    .pipe(sass())
    .pipe(concat('style.css'))
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist/css'));
});

gulp.task('watch', () => {
  gulp.watch('src/**/*.js', gulp.series('js'));
  gulp.watch('src/**/*.css', gulp.series('css'));
});

gulp.task('default', gulp.parallel('js', 'css', 'watch'));
