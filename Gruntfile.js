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

	        result["ui/scripts/static_scripts.min.js"] =
				  [
            "ui/scripts/libraries/jquery-2.2.2.min.js",
  					"ui/scripts/libraries/modernizr-custom.js",
  					"ui/scripts/libraries/require.min.js"
          ];
	        return result;
		    }()
			}
    },
    ts: {
      default : {
        src: ["scripts/*.ts", "!node_modules/**/*.ts"]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  //grunt.loadNpmTasks('grunt-contrib-less');
  //grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-ts');

  // Default task(s).
  grunt.registerTask('default', ['ts']);
  grunt.registerTask('staticjs','uglify:sitefiles');
};
