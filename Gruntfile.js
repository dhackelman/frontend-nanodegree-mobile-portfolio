module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		uglify: {
		build: {
			src: 'js/perfmatters.js',
			dest: 'js/permatters.min.js'
			},

		},

		imagemin: {
			dynamic: {                         // Another target 
			      files: [{
			        expand: true,                  // Enable dynamic expansion 
			        cwd: 'img',                   // Src matches are relative to this path 
			        src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match 
			        dest: 'img'                  // Destination path prefix 
			      }]
			    }

		}
	});

	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask('default', ['imagemin', 'uglify']);

};