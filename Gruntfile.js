module.exports = function(grunt) {

  grunt.initConfig({

    watch: {
      uglify: {
        files: 'src/js/uix.js',
        tasks: ['uglify'],
        options: {
          livereload: true
        }
      },
      all: {
        files: ['**/*.html'],
        options: {
          livereload: true
        }
      }
    },

    uglify: {
      build: {
        files: {
          'src/js/uix.min.js': ['src/js/uix.js']
        }
      }
    },

   cssmin: {
    build: {
      src: 'src/css/reset.css',
      dest: 'build/css/reset.css'
    }
  },

  // Default task
  grunt.registerTask('default', ['watch']);
  grunt.registerTask('css', ['cssmin']);
  grunt.registerTask('js', ['uglify']);

  // Load up tasks
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

};