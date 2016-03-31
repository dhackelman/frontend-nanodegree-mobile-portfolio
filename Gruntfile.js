module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    imagemin: {
		jpg: {
			options: {
				progressive: true
			},
		files: [{
			expand: true,
			cwd: 'src/views/images/',
			src: ['**/*.{png,jpg,gif}'],
			dest: 'dist/views/images/'
		}]
		}   
    },

    uglify: {
      build: {
        src: 'src/js/perfmatters.js',
        dest: 'dist/js/perfmatters.min.js'
      }
    }, 
    uglify: {
      build: {
        src: 'src/views/js/main.js',
        dest: 'dist/views/js/main.min.js'
      }
    }, 


  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'uglify', 'imagemin']);

};