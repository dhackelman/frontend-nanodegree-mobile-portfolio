// include gulp
var gulp = require('gulp'), 
	uglify = require('gulp-uglify');
	inlineCss = require('gulp-inline-css');
	htmlmin = require('gulp-htmlmin');
	cleanCSS = require('gulp-clean-css');

//Scripts Task
//Uglifies

gulp.task('scripts', function() {
	gulp.src('src/**/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('dist'))
});


//minify HTML
//chyeah
gulp.task('minifyHTML', function() {
	gulp.src('src/**/*.html')
	.pipe(htmlmin({collapseWhitespace: true}))
	.pipe(gulp.dest('dist'))
});

//Watch Task
//Watches JS

gulp.task('watch', function() {
	gulp.watch('src/**/*.js', ['scripts']);
});

//Clean CSS
//minify CSS file
gulp.task('minify-css', function () {
	gulp.src('src/**/*.css')
	.pipe(cleanCSS({compatibility: 'ie8'}))
	.pipe(gulp.dest('dist'));
});

gulp.task('default', ['scripts', 'minifyHTML', 'watch', 'minify-css']);
