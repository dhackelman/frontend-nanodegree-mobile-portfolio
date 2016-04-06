// include gulp
var gulp = require('gulp'), 
	uglify = require('gulp-uglify');
	imagemin = require('gulp-imagemin');
	inlineCss = require('gulp-inline-css');

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


//Inline CSS
//chyeah


//Watch Task
//Watches JS

gulp.task('watch', function() {
	gulp.watch('src/js/*.js', ['scripts']);
});

gulp.task('default', ['scripts', 'styles', 'watch']);
