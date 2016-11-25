module.exports = function(grunt) {

  grunt.initConfig({
    pug: {
      compile: {
        options: {
          data: {
            debug: true
          }
        },
        files: {
          'index.html': ['pug/main.pug']
        }
      }
    },
    watch: {
      scripts: {
        files: ['**/*.pug', '**/*.sass'],
        tasks: ['pug', 'sass'],
        options: {
          spawn: false,
          livereload: true
        },
      },
    },
    connect: {
      server: {
        options: {
          livereload: true,
          port: 8000,
          base: '.'
        }
      }
    },
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'css/style.css': 'sass/main.sass'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-pug');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('default', ['pug', 'sass', 'connect', 'watch']);
};
