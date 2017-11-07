module.exports = function (grunt) {
    grunt.initConfig({
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['static/js/src/*.js'],
                dest: 'static/js/dist/main.js'
            }
        },
        uglify: {
            dist: {
                src: ['static/js/dist/main.js'],
                dest: 'static/js/dist/main.min.js'
            }
        },

        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'static/css/dist/style.css': 'static/css/src/style.sass'
                }
            },
        }

    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('default', ['concat']);
    grunt.registerTask('dev', ['concat', 'uglify']);
    grunt.registerTask("default", ["cssmin"]);
    grunt.registerTask('default', ['sass']);
};
