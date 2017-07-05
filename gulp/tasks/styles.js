var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssvars = require('postcss-simple-vars');
var nested = require('postcss-nested');
var cssImport = require('postcss-import');
var mixins = require('postcss-mixins');

gulp.task('styles', function() {
  // gulp.src() is an asyncronous function
  return gulp.src('./app/assets/styles/styles.css')
  // now we want to run the styles through postCSS filters
  // postcss is expecting an array
  // cssImport at the very beginning
  .pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer]))
  // prevent watch task from stopping running when there's a syntax css error
  .on('error', function (errorInfo) {
    console.log(errorInfo.toString());
    this.emit('end');
  })
  .pipe(gulp.dest('./app/temp/styles')); //moving the css content from A to B
});
