var pngquant = require('imagemin-pngquant');
var mozjpeg = require('imagemin-mozjpeg');
var gifsicle = require('imagemin-gifsicle');

module.exports = function(grunt) {

  // Project configuration.


  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          'dist/index.html': 'src/index.html',
          'dist/views/pizza.html' : 'src/view/pizza.html'
        }
      }
    },

    imagemin: {
      target: {
        options: {
          optimizationLevel: 2, 
          cache: false,
          progressive: true, 
          use: [pngquant(), mozjpeg(), gifsicle()]
        },
        files: [{
          expand: true, 
          cwd: 'src/views/images/',
          src: ['**/*.{png,jpg,jpeg,fig}'],
          dest: 'dist/views/images'
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
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-imagemin-pngqunt');
  grunt.loadNpmTasks('grunt-contrib-imagemin-mozjpeg');
  grunt.loadNpmTasks('grunt-contrib-imagemin-gifsicle');

  // Default task(s).
  grunt.registerTask('default', ['htmlmin:dist','imagemin', 'uglify', 'uglify', ]);

};