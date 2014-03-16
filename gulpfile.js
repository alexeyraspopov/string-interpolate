var gulp = require('gulp'),
	mocha = require('gulp-mocha');

gulp.task('default', function(){
	return gulp.src('spec.js')
		.pipe(mocha());
})