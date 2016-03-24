module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		uglify: {
			build: {
				src: 'js/perfmatters.js',
				dest: 'js/permatters.min.js'
				},

		},

		cssmin: {
		   dist: {
		      files: {
		         'dist/css/style.min.css': ['css/style.css']
		      }
		  }
		}, 

		htmlmin: {
		   dist: {
		      options: {
		         removeComments: true,
		         collapseWhitespace: true
		      },
		      files: [{
		         expand: true,
		         src: 'index.html',
		         dest: 'dist/'
		      }]
		   }
		},

	
    	inlinecss: {
	        main: {
	            options: {
	            },
	            files: {
	                'out.html': 'in.html'
	            }
	        }
    }
});

	grunt.loadNpmTasks('grunt-contrib-inlinecss');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.registerTask('default', ['uglify', 'htmlmin', 'cssmin', 'inlinecss']);

};