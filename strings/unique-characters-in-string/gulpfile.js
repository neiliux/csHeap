var gulp = require('gulp');
var path = require('path');
var ts = require('gulp-typescript');
var mocha = require('gulp-mocha');

gulp.task('build', function() {
    var tsProject = ts.createProject(path.resolve('./tsconfig.json'));
    return gulp
            .src(path.resolve('./src/**/*.ts'))
            .pipe(ts(tsProject))
            .pipe(gulp.dest('./output'))
});

gulp.task('test', ['build'], function() {
    return gulp.src('./output/**/*tests*.js', { read: false })
               .pipe(mocha({}));
});

gulp.task('default', ['build', 'test']);
