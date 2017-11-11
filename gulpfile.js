var gulp = require('gulp');
var uglify = require('gulp-uglify');
var uglifycss = require('gulp-uglifycss');
var htmlmin = require('gulp-htmlmin');
var del = require('del');
var replace = require('gulp-replace');


// Minify JS
gulp.task('scripts', function () {
    return gulp.src(['js/*.js', '!js/*.min.js'])
        .pipe(uglify())
        .pipe(gulp.dest('dist/js/'));
});
// Minify CSS
gulp.task('styles', function () {
    return gulp.src(['css/*.css','!css/*.min.css'])
        .pipe(uglifycss())
        .pipe(gulp.dest('dist/css/'));
});
// Compress HTML
gulp.task('html', function() {
  gulp.src('index.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(replace(/<<version>>/g, Date.now()))
    .pipe(gulp.dest('dist'));
});
// Copy rest of the things
gulp.task('copy-assets', function() {
  gulp.src(['!**/node_modules/**/*', '**/img/**/*', '**/fonts/**/*', '**/js/**/*.min.js', '**/css/**/*.min.css'])
    .pipe(gulp.dest('dist/'));
});
// Clean the distribution folder before building the solution
gulp.task('clean', function(){
     return del('dist/**', {force:true});
});
// All tasks
gulp.task('compile', ['scripts', 'styles', 'html']);
// Default Task
gulp.task('default', ['copy-assets', 'compile']);