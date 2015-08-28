var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('build', function () {
  browserify({
    entries: './src/app.js',
    extensions: ['.js'],
    debug: true
  })
    .transform(babelify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('html', function () {
  gulp.src('./src/*.html')
    .pipe(gulp.dest('./dist/'));
});

gulp.task('data', function () {
  gulp.src('./data/*.json')
    .pipe(gulp.dest('./dist/'));
});

gulp.task('default', ['build', 'html', 'data']);