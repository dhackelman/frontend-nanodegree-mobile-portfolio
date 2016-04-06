// include gulp
var gulp = require('gulp'), 
	uglify = require('gulp-uglify');
	imagemin = require('gulp-imagemin');
	inlineCss = require('gulp-inline-css');
	htmlmin = require('gulp-htmlmin');

//Scripts Task
//Uglifies

gulp.task('scripts', function() {
	gulp.src('src/js/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('dist/minjs'))
});


//Images Task
//Compress
gulp.task('image', function(){
	gulp.src('src/views/images/*')
		.pipe(imagemin({
			progressive: true, 
			optimizationLevel: 7
		}))
		.pipe(gulp.dest('dist/views/images'));
});


//minify HTML
//chyeah
gulp.task('minifyHTML', function() {
	gulp.src('src/*html')
	.pipe(htmlmin({collapseWhitespace: true}))
	.pipe(gulp.dest('dist'))
});

//Watch Task
//Watches JS

gulp.task('watch', function() {
	gulp.watch('src/js/*.js', ['scripts']);
});

gulp.task('default', ['scripts', 'image', 'minifyHTML', 'watch']);
