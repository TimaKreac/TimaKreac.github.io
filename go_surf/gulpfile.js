const gulp = require('gulp'),
   sass = require('gulp-sass'),
   browserSync = require('browser-sync'),
   uglify = require('gulp-uglify'),
   concat = require('gulp-concat'),
   rename = require('gulp-rename'),
   del = require('del'),
   autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', () =>
   gulp
      .src('app/sass/**/*.sass')
      .pipe(sass({ outputStyle: 'compressed' }))
      .pipe(
         autoprefixer({
            overrideBrowserslist: ['last 10 versions', 'not dead'],
         })
      )
      .pipe(
         rename({
            suffix: '.min',
         })
      )
      .pipe(gulp.dest('app/css'))
      .pipe(browserSync.reload({ stream: true }))
);

gulp.task('css', () =>
   gulp
      .src([
         'node_modules/normalize.css/normalize.css',
         'node_modules/slick-carousel/slick/slick.css',
         'node_modules/animate.css/animate.css',
      ])
      .pipe(concat('_libs.scss'))
      .pipe(gulp.dest('app/sass'))
      .pipe(browserSync.reload({ stream: true }))
);

gulp.task('html', () =>
   gulp.src('app/*.html').pipe(browserSync.reload({ stream: true }))
);

gulp.task('script', () =>
   gulp.src('app/js/*.js').pipe(browserSync.reload({ stream: true }))
);

gulp.task('js', () =>
   gulp
      .src(['node_modules/slick-carousel/slick/slick.js'])
      .pipe(concat('libs.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest('app/js'))
      .pipe(browserSync.reload({ stream: true }))
);

gulp.task('browser-sync', () => {
   browserSync.init({
      server: {
         baseDir: 'app/',
      },
   });
});

gulp.task('clean', async () => {
   del.sync('dist');
});

gulp.task('watch', () => {
   gulp.watch('app/sass/**/*.sass', gulp.parallel('sass'));
   gulp.watch('app/*.html', gulp.parallel('html'));
   gulp.watch('app/js/*.js', gulp.parallel('script'));
});

gulp.task(
   'default',
   gulp.parallel('css', 'sass', 'js', 'browser-sync', 'watch')
);

gulp.task('export', () => {
   const buildHTML = gulp.src('app/**/*.html').pipe(gulp.dest('dist'));
   const buildCSS = gulp.src('app/css/**/*.css').pipe(gulp.dest('dist/css'));
   const buildJS = gulp.src('app/js/**/*.js').pipe(gulp.dest('dist/js'));
   const buildFonts = gulp
      .src('app/fonts/**/*.*')
      .pipe(gulp.dest('dist/fonts'));
   const buildImages = gulp
      .src('app/images/**/*.*')
      .pipe(gulp.dest('dist/images'));
});

gulp.task('build', gulp.series('clean', 'export'));
