'use strict';

const gulp = require('gulp'); // quote GULP
const nunjucksRender = require('gulp-nunjucks-render'); // complie nunjucks into HTML
const data = require('gulp-data'); // read JSON data from nunjucks
const sass = require('gulp-sass'); // compile SCSS
const postcss = require('gulp-postcss'); // Pipe CSS
const cleanCSS = require('gulp-clean-css'); // minfy CSS
const autoprefixer = require('autoprefixer'); // complement CSS prefixer
const source = require('vinyl-source-stream'); //　change vinyl to Stream
const plumber = require('gulp-plumber');
const minify = require('gulp-minify'); //　minify JS
const browserify = require('browserify'); // require JS module
const sourcemaps = require('gulp-sourcemaps');
const bs = require('browser-sync').create();
const imagemin = require('gulp-imagemin'); // compress image
const del = require('del'); // delete image
const clean = require('gulp-clean'); // remove dist
const rename = require('gulp-rename'); // rename files
const runSequence = require('run-sequence'); // gulp task order

const gutil = require('gulp-util');

// PATH
const src = 'src'; // Source dir
const dist = 'dist'; // Build dir
const paths = {
  srcHTML: src + '/**/*.+(html|njk|xml)',
  srcDATA: src + '/**/*.json',
  srcSASS: src + '/**/*.+(scss|css)',
  srcJS: src + '/**/*.js',
  srcIMG: src + '/assets/**/*.+(png|jpg|gif|svg)',
  srcFONT: src + '/assets/**/*.+(ttf|woff|truetype|svg)',
  srcAUDIO: src + '/assets/**/*.+(mp3|ogg)',
  srcVIDEO: src + '/assets/**/*.mp4',

  distJS: dist + '/**/*.js',
  distIMG: dist + '/assets/**/*.+(png|jpg|gif|webp)',
};

// BrowserSync
gulp.task('sync', function () {
  bs.init({
    server: {
      baseDir: './dist',
      index: 'index.html',
    },
  });
  bs.reload('*.html');
});

// HTML compile
gulp.task('njk', function () {
  return (
    gulp
      .src('src/pages/**/*.+(html|njk|xml)')
      // read data.json
      .pipe(
        data(function () {
          return require('./src/data/data.json');
        })
      )
      // spit out html
      .pipe(
        nunjucksRender({
          path: ['src/_templates'],
        })
      )
      .pipe(gulp.dest('dist'))
      .pipe(bs.reload({ stream: true }))
  );
});

// Sass compile
gulp.task('sass', function () {
  return gulp
    .src(paths.srcSASS)
    .pipe(
      sass({
        outputStyle: 'expanded',
        // style：nested, compact, expanded, compressed
      })
    )
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(
      postcss([
        autoprefixer({
          grid: true,
          browsers: ['last 2 versions'],
          cascade: false,
        }),
      ])
    )
    .pipe(rename({ suffix: '.min' }))
    .pipe(cleanCSS())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'))
    .pipe(bs.reload({ stream: true }));
});

// Compile JS
gulp.task('js', function () {
  let bs = browserify({
    entries: 'src/script/app.js',
    debug: true,
    // paths: ['./node_modules'],
    // cache: {},
    // packageCache: {}
  });
  return bs
    .bundle()
    .pipe(source('app.js'))
    .pipe(rename({ suffix: '.bundle' }))
    .on('error', function (err) {
      gutil.log(gutil.colors.red('[Error]'), err.toString());
    })
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('src/script'));
});

// Minify JS
gulp.task('minjs', function () {
  return gulp
    .src(['src/script/app.bundle.js'])
    .pipe(
      minify({
        ext: { min: '.min.js' },
      })
    )
    .pipe(gulp.dest('dist/script'));
});

// Minify assets
gulp.task('img', function () {
  return (
    gulp
      .src(paths.srcIMG)
      .pipe(imagemin())
      //     interlaced: true,
      //     progressive: true,
      //     optimizationLevel: 5,
      //     svgoPlugins: [{removeViewBox: true}]
      // }))
      .pipe(gulp.dest('dist/assets/'))
  );
});

//  Transfer font files
gulp.task('font', function () {
  return gulp.src(paths.srcFONT).pipe(gulp.dest('dist/assets'));
});

//  Transfer audio files
gulp.task('audio', function () {
  return gulp.src(paths.srcAUDIO).pipe(gulp.dest('dist/assets'));
});

//  Transfer video files
gulp.task('video', function () {
  return gulp.src(paths.srcVIDEO).pipe(gulp.dest('dist/assets'));
});

//  Transfer JSON files
gulp.task('JSON', function () {
  return gulp.src(paths.srcDATA).pipe(gulp.dest('dist/'));
});

// Delete assets
gulp.task('del', function (cb) {
  return del(paths.distIMG, cb);
});

// Delete js
gulp.task('deljs', function (cb) {
  return del('dist/script/app.js', cb);
});

// Clean build files
gulp.task('clean', function () {
  return gulp.src('dist', { read: false }).pipe(clean());
});

// Build
gulp.task(
  'build',
  gulp.series(
    'clean',
    gulp.parallel(
      'js',
      'njk',
      'sass',
      'minjs',
      'JSON',
      'img',
      'font',
      'audio',
      'video',
      'del',
      function (done) {
        done();
      }
    ),
    function (done) {
      done();
    }
  )
);

// WATCH
gulp.task('watch', gulp.task('sync'), function () {
  gulp.watch(paths.srcHTML, gulp.task('njk'));
  gulp.watch(paths.srcDATA, gulp.task('njk')).on('change', bs.reload);
  gulp.watch(paths.srcSASS, gulp.task('sass'));
  // gulp.watch(paths.srcJS,    task('js')).on('change', bs.reload);
  // gulp.watch(paths.distJS,   task('minjs')).on('change', bs.reload);
  gulp.watch(paths.srcIMG, gulp.task('img')).on('change', bs.reload);
  gulp
    .watch(paths.srcFONT, gulp.task('font'))
    .on('change', bs.reload);
  gulp
    .watch(paths.srcAUDIO, gulp.task('audio'))
    .on('change', bs.reload);
  gulp
    .watch(paths.srcVIDEO, gulp.task('video'))
    .on('change', bs.reload);
  gulp.watch(paths.srcIMG, gulp.task('del')).on('change', bs.reload);
});

// Gulp
gulp.task('default', gulp.task('watch'));

// HELP
gulp.task('help', function () {
  console.log('------------------ Individual --------------------');
  console.log('gulp sync   --- Start BrowserSync');
  console.log('gulp njk    --- Complie njk file / convert to html');
  console.log('gulp css    --- Complie Sass / minfy css');
  console.log('gulp js     --- Bundle JS');
  console.log('gulp minjs  --- Minify JS');
  console.log('gulp img    --- Minify assets');
  console.log('gulp font   --- Transfer font files');
  console.log('gulp audio  --- Transfer audio files');
  console.log('gulp del    --- Delete assets changed in src');
  console.log('gulp clean  --- Clean dist files');
  console.log('gulp build  --- Build dist files');
  console.log('gulp watch  --- Watch image changes form src folder');
  console.log('------------------ General ------------------------');
  console.log('gulp        --- Build dist / execute liveload');
  console.log('---------------------------------------------------');
});
