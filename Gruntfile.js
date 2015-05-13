module.exports = function(grunt) {

    'use strict';

    grunt.initConfig({

        // Tasks here
        assemble: {
            options: {
                layout: 'default.hbs',
                layoutdir: './src/layouts/',
                partials: './src/layouts/partials/**/*.hbs',
                helpers: './src/helpers/**/*.js'
            },
            blog: {
                files: [{
                    cwd: './src/content',
                    dest: './build/',
                    expand: true,
                    src: ['**/*.md', '**/*.hbs']
                }]
            }
        },

        copy: {
          'static-assets': {
            files: [{
              expand: true,
              src: [
                './**/*'
              ],
              dest: 'build/',
              filter: 'isFile',
              cwd: 'src/static/'
            }]
          }
        }

    });

    // Load plugins for the above tasks
    grunt.loadNpmTasks('assemble');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // The default task or other custom tasks
    grunt.registerTask('default', ['assemble', 'copy']);

};
