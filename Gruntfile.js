module.exports = function(grunt) {
  var continuousIntegrationMode = grunt.option('ci') || false;
  // Porject configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        }
      // build: {
      //   // src: 'src/<%= pkg.name %>.js',
      //   src: 'index.js',
      //   dest: 'index.min.js'
      // }
    },
    jshint: {
      options: {
        eqnull: true
      },
      all: [
            'Gruntfile.js',
            'src/js/*.js'
           ]
    },
    connect: {
        server: {
          options: {
            port: 9001,
            base: './www',
            keepalive: true
          }
        }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', ['uglify', 'jshint']);
  grunt.registerTask('run', ['connect']);
};
