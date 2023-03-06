const gulp = require('gulp');
const browserify = require('browserify');
const babelify = require('babelify');
const cssify = require('cssify');
const source = require('vinyl-source-stream');

gulp.task('progress-bar', () => {
  return browserify('./src/js/components/progress-bar/progress-bar.js', { debug: true })
    .transform(babelify, { presets: ['@babel/preset-env'] })
    .transform(cssify)
    .bundle()
    .pipe(source('progress-bar.js'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('all', gulp.series('progress-bar'));

gulp.task('watch', () => {
  gulp.watch('./src/js/components/progress-bar/*.js', gulp.series('progress-bar'));
});

gulp.task('default', gulp.series('all', 'watch'));
