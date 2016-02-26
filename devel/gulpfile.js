var gulp = require('gulp');
var sync = require('browser-sync').create();
var concat = require('gulp-concat');
var minify = require('gulp-minify');
var less = require('gulp-less');
var cssnano = require('gulp-cssnano');

gulp.task('default', ['watch']);

gulp.task('watch', ['sync', 'less', 'scripts'], function(){
	gulp.watch('./*/*.less', ['less']);
	gulp.watch('./*/*.js', ['scripts']);
	gulp.watch('../dist/*/*.html', sync.reload);	
});

gulp.task('sync', function(){
	sync.init({
		server: {
			baseDir: '../dist/'
		},
	})
});

gulp.task('less', function () {
	return gulp.src('./less/style.less')		
		.pipe(less())
		.pipe(cssnano())
		.pipe(gulp.dest('../dist'))
		.pipe(sync.reload({
			stream: true
		}))
});

gulp.task('scripts', function(){
	return gulp.src([
			'./node_modules/jquery/dist/jquery.js',
			'./node_modules/jquery-colorbox/jquery.colorbox.js',
			'./node_modules/bootstrap/dist/js/bootstrap.js',
			'./node_modules/bootstrap-validator/dist/validator.js',
			'./node_modules/d3/d3.js',
			'./js/*.js'
			])
		.pipe(concat('scripts.js'))
		.pipe(minify())
		.pipe(gulp.dest('../dist'))
		.pipe(sync.reload({
			stream: true
		}))
});