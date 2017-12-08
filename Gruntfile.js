module.exports = function (grunt) {
    grunt.initConfig({
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: [
                    'static/js/*.js', 'static/js/controllers/*.js',
                    'static/js/models/*.js', 'static/js/directives/*.js'
                ],
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
            }
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
        },
        watch: {
            css: {
                files: '**/*.sass',
                tasks: ['sass']
            },
            scripts: {
                files: '**/*.js',
                tasks: ['concat']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    
    grunt.registerTask('default', ['watch', 'concat', 'cssmin', 'sass']);
    grunt.registerTask('dev', ['concat', 'sass', 'watch']);
};
