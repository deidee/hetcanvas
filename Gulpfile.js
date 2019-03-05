
var gulp = require('gulp');
var twig = require('gulp-twig');

// Compile Twig templates to HTML
gulp.task('templates', function() {
    return gulp.src('src/*.twig') // run the Twig template parser on all .html files in the "src" directory
        .pipe(twig({
            // TODO: Feed it JSON, or something.
            data: {
                artwork: {
                    dir: 'ltr',
                    lang: 'en',
                    description: 'Blank canvas.',
                    title: 'canvas',
                    themeColor: '#a00ade',
                    image: '',
                    url: '/'
                },
                body: '<h1>Hello, World!</h1>'
            },
            extname: false
        }))
        .pipe(gulp.dest('dist')); // output the rendered HTML files to the "dist" directory
});
