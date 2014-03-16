var gulp = require('gulp'),
	mocha = require('gulp-mocha'),
	wrap = require('gulp-wrap-exports'),
	rename = require('gulp-rename');

gulp.task('test', function(){
	return gulp.src('spec.js')
		.pipe(mocha());
});

gulp.task('build', ['test'], function(){
	return gulp.src('index.js')
		.pipe(wrap({ name: 'interpolate' }))
		.pipe(rename('interpolate.js'))
		.pipe(gulp.dest('./'));
});

gulp.task('default', ['test', 'build']);
