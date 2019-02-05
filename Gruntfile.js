module.exports = function(grunt) {
    grunt.initConfig({
        twigRender: {
            your_target: {
                files : [
                    {
                        data: {
                            body: 'Hello, World!',
                            artwork: {
                                title: 'Hello, World!'
                            }
                        },
                        template: 'src/index.html.twig',
                        dest: 'dist/index.html'
                    }
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-twig-render');

    grunt.registerTask('build', 'twigRender');
};
