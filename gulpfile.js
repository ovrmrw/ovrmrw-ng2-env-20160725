'use strict';

const gulp = require('gulp');
const plumber = require('gulp-plumber');
const mocha = require('gulp-mocha');

////////////////////////////////////////////////////////////////////////////////
// Mocha
const rxjsSpecJS = './.dest-test-rxjs/webpack.bundle.spec.rxjs.js';

gulp.task('mocha:rxjs', [], () => {
  gulp.src(rxjsSpecJS)
    .pipe(plumber())
    // gulp-mocha needs filepaths so you can't have any plugins before it 
    .pipe(mocha({
      useColors: true,
      reporter: 'spec'
    }));
});

gulp.task('mocha:rxjs:w', ['mocha:rxjs'], () => {
  gulp.watch([rxjsSpecJS], ['mocha:rxjs']);
});



////////////////////////////////////////////////////////////////////////////////
// Build for deploy

const copyFiles = [
  './public/*.{html,css,js}',
];

gulp.task('copy', [], () => {
  return gulp.src(copyFiles)
    .pipe(gulp.dest('./.dest'));
});

gulp.task('copy:w', [], () => {
  gulp.watch(copyFiles, ['copy']);
});
