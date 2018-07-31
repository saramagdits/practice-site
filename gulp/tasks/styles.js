const gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    cssImport = require('postcss-import'),
    cssvars = require('postcss-simple-vars'),
    nested = require('postcss-nested'),
    autoprefixer = require('autoprefixer');

gulp.task('styles', function () {
    // we include return because gulp.src is an asynchronous function
    return gulp.src('./assets/styles/styles.css')
        .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
        .on('error', function(errorInfo){
            console.log(errorInfo.toString());
            this.emit('end');
        })
        .pipe(gulp.dest('./temp/styles'));

});