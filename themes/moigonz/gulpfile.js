var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var minifycss = require('gulp-minify-css');

var gulp = require('gulp');  
var sass = require('gulp-sass');

var sassFiles = 'assets/sass/**/*.scss';
var rscFolder = 'assets/rsc/**/*.scss';
var cssDest = 'assets/css/';

gulp.task('styles', function(){  
	gulp.src(sassFiles)
		.pipe(sass({
			style: 'compressed',
			lineNumbers: true,
			sourcemap: false,
		}).on('error', sass.logError))
		.pipe(concat('style.css'))
		.pipe(minifycss())
		.pipe(gulp.dest(cssDest));
});

gulp.task('watch-styles', function() {
	gulp.watch([sassFiles, rscFolder], ['styles']);
});