module.exports = function(grant) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		uglify: {
		build: {
			src: 'js/perfmatters.js',
			dest: 'js/permatters.min.js'
		}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['uglify']);
};