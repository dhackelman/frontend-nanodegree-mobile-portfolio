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

		imagemin: {
			dynamic: {                         
			      files: [{
			        expand: true,                  
			        cwd: 'img',                   
			        src: ['**/*.{png,jpg,gif}'],   
			        dest: 'dist'                  
			      }]
			    }

		}
	});

	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.registerTask('default', ['imagemin', 'uglify', 'htmlmin', 'cssmin']);

};