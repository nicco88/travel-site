var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssvars = require('postcss-simple-vars'),
    nested = require('postcss-nested'),
    cssImport = require('postcss-import'),
    mixins = require('postcss-mixins'),
    hexrgba = require('postcss-hexrgba')
;

gulp.task('styles', function() {
  // gulp.src() is an asyncronous function
  return gulp.src('./app/assets/styles/styles.css')
  // now we want to run the styles through postCSS filters
  // postcss is expecting an array
  // cssImport at the very beginning
  .pipe(postcss([cssImport, mixins, cssvars, nested, hexrgba, autoprefixer]))
  // prevent watch task from stopping running when there's a syntax css error
  .on('error', function (errorInfo) {
    console.log(errorInfo.toString());
    this.emit('end');
  })
  .pipe(gulp.dest('./app/temp/styles')); //moving the css content from A to B
});
