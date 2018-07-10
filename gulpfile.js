'use strict';


const gulp           = require('gulp'); // quote GULP
const nunjucksRender = require('gulp-nunjucks-render'); // complie nunjucks into HTML
const data           = require('gulp-data'); // read JSON data from nunjucks
const sass           = require('gulp-sass'); // compile SCSS
const postcss        = require("gulp-postcss"); // Pipe CSS
const cleanCSS       = require('gulp-clean-css'); // minfy CSS
const autoprefixer   = require("autoprefixer"); // complement CSS prefixer
const source         = require('vinyl-source-stream');　//　change vinyl to Stream
const minify         = require('gulp-minify'); //　minify JS
const browserify     = require('browserify'); // require JS module
const bs             = require('browser-sync').create();　
const imagemin       = require('gulp-imagemin'); // compress image
const del            = require('del'); // delete image
const clean          = require('gulp-clean'); // remove dist
const rename         = require('gulp-rename'); // rename files
const runSequence    = require('run-sequence'); // gulp task order




// PATH

const src   = 'src';         // Source dir
const dist  = 'dist';        // Build dir
const paths =
{
    srcHTML:  src  + '/**/*.+(html|njk|xml)',
    srcDATA:  src  + '/**/*.json',
    srcSASS:  src  + '/**/*.+(scss|css)',
    srcJS:    src  + '/**/*.js',
    srcIMG:   src  + '/images/**/*.+(png|jpg|gif|webp)',
    srcFONT:  src  + '/font/**/*.+(ttf|woff|truetype|svg)',

    distJS:   dist + '/**/*.js',
    distIMG:  dist + '/images/**/*.+(png|jpg|gif|webp)'
};


// BrowserSync

gulp.task('sync', function() {
    bs.init({
        server: {
            baseDir: "./dist",
            index: "index.html"
        },
    });
    bs.reload('*.html');
});


// HTML compile

gulp.task('njk', function() {
    return gulp.src('src/pages/**/*.+(html|njk|xml)')
    // read data.json
    .pipe(data(function() {
        return require('./src/_data/data.json')
    }))
    // spit out html
    .pipe(nunjucksRender({
        path: ['src/_templates']
    }))
    .pipe(gulp.dest('dist'))
    .pipe(bs.reload({ stream: true }))
});


// Sass compile

gulp.task('sass', function() {
    return gulp.src(paths.srcSASS)

    .pipe(sass.sync().on('error', sass.logError))
    .pipe(sass({
        outputStyle: 'expanded'
        // style：nested, compact, expanded, compressed
    }))
    .pipe(postcss([
      autoprefixer({
        grid: true,
        browsers: ['last 2 versions'],
        cascade: false
      })
    ]))

    .pipe(rename({ suffix: ".min" }))
    // .pipe(cleanCSS({compatibility: '*'}))
    .pipe(gulp.dest('dist'))
    .pipe(bs.reload({ stream: true }))
});


// Compile JS

gulp.task('js', function() {
    return browserify({
        entries: 'src/script/app.js',
        debug: true,
        paths: ['./node_modules'],
        cache: {},
        packageCache: {}
    })
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('dist/script'));
});


// Minify JS

gulp.task('minjs', ['js'], function() {
    gulp.src(['dist/script/app.js'])
        .pipe(minify({
            ext: { min:'.min.js'}
        }))
        .pipe(gulp.dest('dist/script'));
});


// Minify images

gulp.task('img', () =>
    gulp.src(paths.srcIMG)
        .pipe(imagemin({
            interlaced: true,
            progressive: true,
            optimizationLevel: 5,
            svgoPlugins: [{removeViewBox: true}]
        }))
        .pipe(gulp.dest('dist/images'))
);


//  Transfer font files

gulp.task('font', function() {
    gulp.src(paths.srcFONT)
        .pipe(gulp.dest('dist/font'))
});


// Delete images

gulp.task('del', function (cb) {
    return del(paths.distIMG, cb)
});


// Delete js

gulp.task('deljs', function (cb) {
    return del('dist/script/app.js', cb)
});


// Clean build files

gulp.task('clean', function() {
    return gulp.src('dist', {read: false})
    .pipe(clean());
});


// Build

gulp.task('build', function(cb) {
    runSequence('clean', ['njk', 'sass', 'minjs', 'img', 'font', 'del'], cb)
});


// WATCH

gulp.task('watch', ['sync'], function()
{
    gulp.watch(paths.srcHTML,  ['njk']);
    gulp.watch(paths.srcDATA,  ['njk']);
    gulp.watch(paths.srcSASS,  ['sass']);
    gulp.watch(paths.srcJS,    ['js']).on('change', bs.reload);
    gulp.watch(paths.distJS,   ['minjs']).on('change', bs.reload);
    gulp.watch(paths.srcIMG,   ['img']).on('change', bs.reload);
    gulp.watch(paths.srcIMG,   ['font']).on('change', bs.reload);
    gulp.watch(paths.srcIMG,   ['del']).on('change', bs.reload);
});


// Gulp

gulp.task('default', ['watch']);


// HELP

gulp.task('help',function () {
  console.log('------------------ Individual --------------------');
  console.log('gulp sync   --- Start BrowserSync');
  console.log('gulp njk    --- Complie njk file / convert to html');
  console.log('gulp css    --- Complie Sass / minfy css');
  console.log('gulp js     --- Bundle JS');
  console.log('gulp minjs  --- Minify JS');
  console.log('gulp img    --- Minify images');
  console.log('gulp font   --- Transfer font files');
  console.log('gulp del    --- Delete images changed in src');
  console.log('gulp clean  --- Clean dist files');
  console.log('gulp build  --- Build dist files');
  console.log('gulp watch  --- Watch image changes form src folder');
  console.log('------------------ General ------------------------');
  console.log('gulp        --- Build dist / execute liveload');
  console.log('---------------------------------------------------');
});
