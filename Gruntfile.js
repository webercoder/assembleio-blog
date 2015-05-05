module.exports = function(grunt) {

    "use strict";

    grunt.initConfig({

        // Tasks here
        assemble: {
            options: {
                layout: 'default.hbs',
                layoutdir: './src/layouts/'
            },
            blog: {
                files: [{
                    cwd: './src/content',
                    dest: './build/',
                    expand: true,
                    src: ['**/*.md']
                }]
            }
        },

    });

    // Load plugins for the above tasks
    grunt.loadNpmTasks('assemble');

    // The default task or other custom tasks
    grunt.registerTask("default", ["assemble"]);

};
