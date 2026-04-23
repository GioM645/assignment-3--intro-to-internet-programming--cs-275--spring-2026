/* eslint-disable no-unused-expressions */
/* eslint-disable @stylistic/indent */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/*
~~ Resources Used ~~
Used for formatting and start assistance: https://github.com/code-warrior/gulp-template-for-html-css-sass-js
Build knowledge and understand functions/syntax: https://gulpjs.com/docs/en/api/concepts
*/

const {reload, watch} = require('browser-sync');
const {src, dest, series} = require('gulp');
    const CSSUglify = require('gulp-clean-css');
    const babel = require('gulp-babel');
    const htmlUglify = require('gulp-htmlmin');
    // eslint-disable-next-line no-sequences
    javaScriptUglify = require('gulp-uglify'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    gulpCleanCss = require('gulp-clean-css');
    let userBrowser = 'default';

    async function firefox() {
        userBrowser = 'firefox';
    }

    async function brave() {
        userBrowser = 'brave browser';
    }

    async function chrome() {
        userBrowser = 'google chrome';
    }

    async function browserList() {
        userBrowser = [
            'firefox',
            'brave browser',
            'google chrome',
        ];
    }

    const comrpressHTML = () => src('index.html')
        .pipe(htmlUglify({collapseWhitespace: true}))
        .pipe(dest('prod'));

    const compressCSS = () => src('styles/main.css')
        .pipe(GulpCleanCss({compatibility: 'es5'}))
        .pipe(dest('prod/styles'));

    const compressResetCSS = () => src('styles/reset.css')
        .pipe(GulpCleanCss({compatibility: 'es5'}))
        .pipe(dest('prod/styles'));

    const transpileAndCompressJS = () => src('js/main.js')
        .pipe(babel())
        .pipe(javaScriptUglify())
        .pipe(dest('prod/js'));

    const copyFiles = () => src([
            '**/assignment-2--intro-to-internet-programming--cs-275--spring-2026/*.*',
            '!**/assignment-2--intro-to-internet-programming--cs-275--spring-2026/**/*.js',
            '!**/assignment-2--intro-to-internet-programming--cs-275--spring-2026/styles/',
        ], {dot: true})
        .pipe(dest('prod'));

    const copyJSON = () => src('json/*.*')
        .pipe(dest('prod/json'));

    const serveSite = () => {
        browserSync({
            notify: true,
            reloadDelay: 25,
            browser: userBrowser,
            server: {
                baseDir: [
                    'temp',
                    'assignment-2--intro-to-internet-programming--cs-275--spring-2026',
                    'assignment-2--intro-to-internet-programming--cs-275--spring-2026/index.html',
                ],
            },
        });
    };

    watch('prod/jsScripts/*.js', series(transpileAndCompressJS)).on('change', reload);
    watch('prod/cssStyles/*.scss', series(compressCSS)).on('change', reload);

    exports.firefox = series(series, serveSite);
    exports.brave = series(series, serveSite);
    exports.chrome = series(series, serveSite);
    exports.browserList = series(series, serveSite);
    exports.compressCSS = compressCSS;
    exports.comrpressHTML = comrpressHTML;
    exports.javaScriptUglify = transpileAndCompressJS;
    exports.serveSite = series(
        comrpressHTML,
        compressCSS,
        transpileAndCompressJS,
        serveSite,
    );
    exports.default = series(
        comrpressHTML,
        compressCSS,
        compressResetCSS,
        transpileAndCompressJS,
        copyJSON,
        copyFiles,
    );
