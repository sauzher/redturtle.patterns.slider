
module.exports = function (grunt) {
  'use strict';

  require('load-grunt-tasks')(grunt);
  var productRoot = 'src/redturtle/patterns/slider';
  grunt.initConfig({
    cssmin: {
      target: {
        files: {
          './src/redturtle/patterns/slider/static/build/redturtle-patterns-slider-bundle-compiled.min.css': [`${productRoot}/libraries/slick/slick.css`],
        },
      },
      options: {
        sourceMap: true,
      },
    },
    requirejs: {
      'tiles-management-bundle': {
        options: {
          baseUrl: './',
          generateSourceMaps: true,
          preserveLicenseComments: false,
          paths: {
            jquery: 'empty:',
            'pat-base': 'empty:',
            'slick.min': `${productRoot}/libraries/slick/slick.min`,
            'redturtle-patterns-slider': `${productRoot}/static/pattern`
          },
          wrapShim: true,
          name: `${productRoot}/static/bundle.js`,
          exclude: ['jquery'],
          out: `${productRoot}/static/build/redturtle-patterns-slider-bundle-compiled.js`,
          optimize: 'none',
        },
      },
    },
    uglify: {
      'redturtle-patterns-slider': {
        options: {
          sourceMap: true,
          sourceMapName: `./${productRoot}/static/build/redturtle-patterns-slider-bundle-compiled.js.map`,
          sourceMapIncludeSources: false,
        },
        files: {
          './src/redturtle/patterns/slider/static/build/redturtle-patterns-slider-bundle-compiled.js': ['./src/redturtle/patterns/slider/static/build/redturtle-patterns-slider-bundle-compiled.js'],
        },
      },
    },

    // sed: {
    //   version: {
    //     path: `./${productRoot}/profiles/default/registry.xml`,
    //     pattern: '2015-02-16 00:00:00',
    //     replacement: grunt.template.today('yyyy-mm-dd 00:00:00'),
    //     recursive: false,
    //   },
    // },
  });

  grunt.registerTask('default', ['watch']);
  grunt.registerTask('compile', ['cssmin', 'requirejs', 'uglify']);

};
