module.exports = function(grunt) {

    "use strict";

    grunt.initConfig({

        // Tasks here
        assemble: {},

    });

    // Load plugins for the above tasks
    grunt.loadNpmTasks('assemble');

    // The default task or other custom tasks
    grunt.registerTask("default", ["assemble"]);

};
