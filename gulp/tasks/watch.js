var gulp = require('gulp');
var watch = require('gulp-watch');
// not requiring the whole package, only the create() method
var browserSync = require('browser-sync').create();


gulp.task('watch', function() {

  browserSync.init({
    server: {
      notify: false,
      baseDir: "app"
    }
  });

  watch('./app/index.html', function () {
    browserSync.reload();
  });

  // whenever we save a change to a css file, gulp will automatically run the styles task above
  // ** means any hypothetical folder
  watch('./app/assets/styles/**/*.css', function () {
    // gulp.start('styles'); this goes down in the 2nd argument
    gulp.start('cssInject');
  });
});

// change automatically when css changes
// tell gulp to run dependencies before injecting: 2nd argument
gulp.task('cssInject', ['styles'], function () {
  // it's an async function, so it requires return
  return gulp.src('./app/temp/styles/styles.css')
            .pipe(browserSync.stream());
});
