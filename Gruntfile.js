module.exports = function(grunt) {
    //require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-open');

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            server: {
                options: {
                    port: 8081,
                    base: './src/client/'
                }
            }
        },
        typescript: {
            dev: {
                src: ['src/client/**/*.ts'],
                dest: 'src/client/app/greeter.js',
                options: {
                    module: 'amd',
                    target: 'es5'
                }
            }
        },
        watch: {
            options: { livereload: 8082 },
            files: ['src/client/**/*.ts', 'src/client/**/*.html'],
            tasks: ['typescript']
        },
        open: {
            dev: {
                path: 'http://localhost:<%= connect.server.options.port %>/index.html'
            }
        }
    });

    // Default task(s).
    grunt.registerTask('default', ['connect', 'open', 'watch']);

};