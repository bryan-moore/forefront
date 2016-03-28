module.exports = function(grunt) {

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
      sitefiles:
			{
		    files: function () {
	        var individualFiles = grunt.file.expand({ cwd: "ui/scripts/" }),
				  result = {};

	        //We loop through all the files that are excluded from and create a minified version
	        individualFiles.forEach(function (filename) {
	          result["ui/scripts/" + filename.replace(".js", ".min.js")] = "ui/scripts/" + filename;
	        });

	        result["ui/scripts/staticscripts.min.js"] =
				  [
            "ui/scripts/vendor/jquery-2.2.2.min.js",
  					"ui/scripts/vendor/modernizr-custom.js",
  					"ui/scripts/vendor/require.js"
          ];
	        return result;
		    }()
			}
    },
    ts: {
      default : {
        src: ["ui/scripts/**/*.ts", "!node_modules/**/*.ts"],
        options: {
          keepDirectoryHierarchy: true, //Path component to cut off when mapping the source files to dest files.  If keepDirectoryHierarchy option is false or not set, it is output as follows. It is same way as the tsc.
					references:
					[
					  "core",       //lib.core.d.ts
					  "dom",        //lib.dom.d.ts
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
    requirejs:{
      compile:
			{
			  options:
				{
				    name: "main",
				    out: "ui/scripts/requiredscripts.min.js",
				    baseUrl: "ui/scripts",
				    mainConfigFile: "ui/scripts/main.js",
				    removeCombined: false,
				    findNestedDependencies: true,
				    preserveLicenseComments: false,
				    logLevel: 0,
				    optimize: "uglify", //uglify
				    paths: function () {

				      var individualFiles = grunt.file.expand({ cwd: "ui/scripts/" }),

              result = {};

			        individualFiles.forEach(function (file) {
			            result[file.replace(".js", "").replace(".min", "")] = "empty:";
			        });

			        return result;

				    }()
				}
			}
    }
  });

  //load tasks
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  //grunt.loadNpmTasks('grunt-contrib-less');
  //grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-ts');

  //define tasks
  grunt.registerTask('default', ['ts']);
  grunt.registerTask('static','uglify:sitefiles');
  grunt.registerTask('require','requirejs');
};
