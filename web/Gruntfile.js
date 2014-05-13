/**
 * Created by rachel on 5/10/14.
 */
module.exports = function(grunt) {


    grunt.initConfig({

        watch :{
            scripts :{
                files : ['js/*.js' ,'css/*.css','index.html'],
                options : {
                    livereload : 9090,
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', []);
};