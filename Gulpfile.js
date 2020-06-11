
var gulp = require('gulp');
var twig = require('gulp-twig');

// Compile Twig templates to HTML
gulp.task('templates', function() {
    return gulp.src(['src/*.twig', '!src/canvas.html.twig'])
        .pipe(twig({
            // This is sample data. Replace with your own!
            data: {
                artist: {
                    location: 'Den Haag, Nederland',
                    name: 'Jan Janssen',
                    twitter: 'deideenl',
                    url: './',
                },
                artwork: {
                    backgroundColor: 'black',
                    dir: 'ltr',
                    lang: 'nl',
                    description: 'Blank canvas.',
                    help: 'https://github.com/deidee/hetcanvas',
                    title: 'het Canvas',
                    themeColor: 'white',
                    image: 'https://deidee.com/logo.png?str=hetcanvas',
                    url: 'https://jeidee.nl/'
                },
                body: '<h1>Hallo, wereld!</h1>',
                gtm: 'UA-6227584-61'
            },
            extname: false // Prevent file extensions from being duplicated in output.
        }))
        .pipe(gulp.dest('dist')); // output the rendered files to the "dist" directory
});
