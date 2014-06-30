/* 
 *  Author: Slawek Kaczorowski 
 *  
 */
module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.initConfig({
    uglify: {
      options: {
        compress: {
          global_defs: {
            "DEBUG": false
          },
          dead_code: true
        }
      },
      my_target: {
        files: {
          'qrcode-image-creator.min.js': ['src/*.js']
        }
      }
    }
  });
  grunt.registerTask('default', ['uglify']);
}