
var gulp = require('gulp');
var twig = require('gulp-twig');

// Compile Twig templates to HTML
gulp.task('templates', function() {
    return gulp.src(['src/*.twig', '!src/canvas.html.twig']) // run the Twig template parser on all .html files in the "src" directory
        .pipe(twig({
            // TODO: Feed it JSON, or something.
            data: {
                artist: {
                    location: 'Den Haag, Nederland',
                    name: 'Jan Janssen',
                    twitter: 'ACJ',
                    url: '/',
                    facebook: {
                        id: '509248955',
                        username: 'acjbizar'
                    }
                },
                artwork: {
                    dir: 'ltr',
                    lang: 'nl',
                    description: 'Blank canvas.',
                    title: 'het Canvas',
                    themeColor: 'white',
                    image: 'https://deidee.com/logo.png?str=hetcanvas',
                    url: '/'
                },
                gtm: 'UA-6227584-61',
                body: '<h1>Hallo, wereld!</h1>'
            },
            extname: false
        }))
        .pipe(gulp.dest('dist')); // output the rendered HTML files to the "dist" directory
});
