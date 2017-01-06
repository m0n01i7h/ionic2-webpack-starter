const gulp = require('gulp');
const path = require('path');
var webpack = require('webpack');
const gulpWebpack = require('gulp-webpack');
const clean = require('gulp-clean');
const tslint = require('gulp-tslint');
const typings = require('gulp-typings');
const shell = require('gulp-shell');
const gutil = require('gulp-util');
const runSequence = require('run-sequence');;

gulp.task('build:prod', done => runSequence('env:prod', 'ngc', 'build', done));
gulp.task('env:prod', () => process.env.NODE_ENV = 'production');

gulp.task('hook:before:build', process.env.NODE_ENV === 'production' ? ['build:prod'] : ['build']);

gulp.task('build', done => webpack(require('./webpack.config'), (err, stats) => {
  if (err) throw new gutil.PluginError('webpack', err);
  done();
})
);

gulp.task('watch', () => gulp.src('./src/main.ts')
  .pipe(gulpWebpack(Object.assign(require('./webpack.config'), { watch: true }), webpack))
  .pipe(gulp.dest('./www/'))
);

gulp.task('typings', () => gulp.src("./typings.json")
  .pipe(typings())
);

gulp.task('tslint', () => gulp.src(['src/**/*.ts'])
  .pipe(tslint({ configuration: 'tslint.json' }))
  .pipe(tslint.report('prose'))
);

gulp.task('ngc', () => gulp.src(path.join(__dirname, 'ngfactory'))
  .pipe(clean())
  .pipe(shell([
    'ngc -p aot.tsconfig.json'
  ]))
);

gulp.task('electron', shell.task(
  [
    {
      test: /^win/,
      command: [`${path.join(__dirname, 'node_modules/electron-prebuilt/dist/electron.exe')} ${path.join(__dirname, 'electron.js')}`]
    },
    {
      test: /^darwin/,
      command: [`${path.join(__dirname, 'node_modules/electron-prebuilt/dist/Electron.app/Contents/MacOS/Electron')} ${path.join(__dirname, 'electron.js')}`]
    }
  ].find(command => command.test.test(process.platform)).command,
  { env: { GOOGLE_API_KEY: 'YOUR_GOOGLE_API_KEY' } }
));