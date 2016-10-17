const gulp = require('gulp');
const path = require('path');
var webpack = require('webpack');
const gulpWebpack = require('gulp-webpack');
const clean = require('gulp-clean');
const tslint = require('gulp-tslint');
const typings = require('gulp-typings');
const shell = require('gulp-shell');

gulp.task('build', () => gulp.src('./src/main.ts')
  .pipe(gulpWebpack(Object.assign(require('./webpack.config')), webpack))
  .pipe(gulp.dest('./www/'))
);
gulp.task('watch', () => gulp.src('./src/main.ts')
  .pipe(gulpWebpack(Object.assign(require('./webpack.config'), { watch: true }), webpack))
  .pipe(gulp.dest('./www/'))
);

gulp.task('typings', () => gulp.src("./typings.json")
  .pipe(typings()));

gulp.task('tslint', () =>
  gulp.src(['src/**/*.ts'])
    .pipe(tslint({ configuration: 'tslint.json' }))
    .pipe(tslint.report('prose'))
);

gulp.task('electron', shell.task(/^win/.test(process.platform)
  ? [`${path.join(__dirname, 'node_modules/electron-prebuilt/dist/electron.exe')} ${path.join(__dirname, 'electron.js')}`]
  : /^darwin/.test(process.platform)
    ? [`${path.join(__dirname, 'node_modules/electron-prebuilt/dist/Electron.app/Contents/MacOS/Electron')} ${path.join(__dirname, 'electron.js')}`]
    : [],
    { env: { GOOGLE_API_KEY: 'YOUR_GOOGLE_API_KEY' }}
));
