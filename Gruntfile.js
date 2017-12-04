module.exports = function (grunt) {
    grunt.initConfig({
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['static/js/*.js', 'static/js/controllers/*.js', 'static/js/models/*.js'],
                dest: 'static/build/js/main.js'
            }
        },
        uglify: {
            dist: {
                src: ['static/build/js/main.js'],
                dest: 'static/build/js/main.min.js'
            }
        },

        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'static/build/css/style.css': 'static/sass/style.sass'
                }
            },
        },
        cssmin: {
            options: {
                keepSpecialComments: 0
            },
            my_target: {
                options: {
                    keepSpecialComments: 1
                },
                src: 'static/build/css/style.css',
                dest: 'static/build/css/output.min.css'
            }
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
