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

        cssmin : {
			target : {
				src : ["static/css/src/*.css"],
				dest : "static/css/dist/style.min.css"
			}
		}

	});
        
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', ['concat']);
    grunt.registerTask('dev', ['concat', 'uglify']);
    grunt.registerTask("default", ["cssmin"]);
};
