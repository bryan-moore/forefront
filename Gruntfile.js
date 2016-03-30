module.exports = function(grunt) {

  requireExcludedFiles = [
    'vendor/*.js',
    'modules/*.js',
    'plugins/*.js',
    '!**/*.min.js'
  ];

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      /*build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      },*/
      sitefiles: {
        files: function() {
          //var individualFiles = grunt.file.expand({ cwd: "ui/scripts/" }, requireExcludedFiles),
          result = {};

          //We loop through all the files that are excluded from and create a minified version
          /*individualFiles.forEach(function (filename) {
            result["ui/scripts/" + filename.replace(".js", ".min.js")] = "ui/scripts/" + filename;
          });*/

          result["ui/scripts/staticscripts.min.js"] = [
            //"ui/scripts/vendor/jquery-2.2.2.min.js",
            "ui/scripts/vendor/modernizr-custom.js",
            "ui/scripts/vendor/require.js"
          ];
          return result;
        }()
      }
    },
    ts: {
      default: {
        src: ["ui/scripts/**/*.ts", "!node_modules/**/*.ts"],
        options: {
          keepDirectoryHierarchy: true, //Path component to cut off when mapping the source files to dest files.  If keepDirectoryHierarchy option is false or not set, it is output as follows. It is same way as the tsc.
          references: [
            "core", //lib.core.d.ts
            "dom", //lib.dom.d.ts
            //"scriptHost", //lib.scriptHost.d.ts
            //"webworker",  //lib.webworker.d.ts
          ],
          module: 'amd', //or commonjs
          target: 'es5', //or es3
          sourceMap: false,
          declaration: false,
          removeComments: false,
        }
      }
    },
    requirejs: {
      compile: {
        options: {
          name: "main",
          out: "ui/scripts/requiredscripts.min.js",
          baseUrl: "ui/scripts",
          mainConfigFile: "ui/scripts/main.js",
          removeCombined: false,
          findNestedDependencies: true,
          preserveLicenseComments: false,
          logLevel: 0,
          optimize: "uglify", //uglify
          paths: function() {

            //exclude pre-minified files, should be conditionaly required
            var individualFiles = grunt.file.expand({
                cwd: "ui/scripts/"
              }, requireExcludedFiles),

              result = {};

            individualFiles.forEach(function(file) {
              result[file.replace(".js", "")] = "empty:";
            });
            console.log(result);

            return result;

          }()
        }
      }
    },
    less: {
      build: {
        options: {
          paths: null,
          compress: false,
          ieCompat: true,
          optimization: null, //number
          strictImports: false,
          strictMath: false,
          strictUnits: false,
          syncImport: false,
          dumpLineNumbers: false,
          relativeUrls: false,
          sourceMap: false,
          outputSourceFiles: false
        },
        files: {
          "ui/styles/css/global.css": "ui/styles/less/global.less",
          "ui/styles/css/blocks.css": "ui/styles/less/blocks.less",
          "ui/styles/css/pages.css": "ui/styles/less/pagetypes.less",
          "ui/styles/css/icons.css": "ui/styles/less/resources.less",
        }
      }
    },
    cssmin: {
      options: {
        report: "min", // min, gzip (slower)
        advanced: true, //set to false to disable advanced optimizations - selector & property merging, reduction, etc.
        aggressiveMerging: true, //set to false to disable aggressive merging of properties
        debug: false, // set to true to get minification statistics under stats property (see test/custom-test.js for examples)
        keepBreaks: false, // whether to keep line breaks (default is false)
        keepSpecialComments: '0', //* for keeping all (default), 1 for keeping first one only, 0 for removing all
        processImport: true, // whether to process @import rules
        rebase: false, // set to false to skip URL rebasing
        relativeTo: '', // path to resolve relative @import rules and URLs
        root: '', // path to resolve absolute @import rules and rebase relative URLs
        roundingPrecision: -1, // rounding precision; defaults to 2; -1 disables rounding
        shorthandCompacting: true, // set to false to skip shorthand compacting (default is true unless sourceMap is set when it's false)
        sourceMap: false, // exposes source map under sourceMap property, e.g. new CleanCSS().minify(source).sourceMap (default is false) If input styles are a product of CSS preprocessor (LESS, SASS) an input source map can be passed as a string.
        target: '', // path to a folder or an output file to which rebase all URLs
      },
      sitefiles: {
        files: {
          'ui/styles/main.min.css': [
            'ui/styles/css/pure.css',
            'ui/styles/css/grids-responsive.css',
            'ui/styles/css/global.css',
            'ui/styles/css/icons.css',
            'ui/styles/css/forms.css',
            'ui/styles/css/tables.css',
            'ui/styles/css/pagetypes.css',
            'ui/styles/css/blocks.css',
            'ui/styles/css/owl.carousel.css',
            'ui/styles/css/owl.theme.css',
          ]
        }
      }
    }
  });

  //load tasks
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-ts');

  //define tasks
  grunt.registerTask('default', 'ts');
  grunt.registerTask('static', 'uglify:sitefiles');
  grunt.registerTask('require', 'requirejs');
  grunt.registerTask('styles', ['less', 'cssmin']);
};
