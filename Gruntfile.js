module.exports = function(grunt) {

	grunt.initConfig({
		
	   	clean: ["dist"],

	   	mkdir: {
	    	prod: {
	      		options: {
	        		create: ['dist', 'dist/js']
	      		},
	    	},
  		},

  		copy: {
			prod: {
			    files: [
      				{src: ['src/index.html'], dest: 'dist/index.html'},
			      	{expand: true, cwd: 'src/fonts/', src: ['**'], dest: 'dist/fonts/'},
			    ],
		  	},
		},


	    sass: {
		    prod: {
				options: {
		            outputStyle: 'compressed',
		            sourceMap: false			
				},
				files: [{
					expand: true,
					cwd: 'src/css',
					src: ['style.scss'],
					dest: 'dist/css',
					ext: '.css'
				}]
			}
		},

		imagemin: {       
		    prod: {    
		      	files: [{
			        expand: true,                
			        cwd: 'src/img/',             
			        src: ['**/*.{png,jpg,gif}'],
			        dest: 'dist/img/'
		      	}]
		    }
		}

	});

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
  	grunt.loadNpmTasks('grunt-sass');
  	grunt.loadNpmTasks('grunt-contrib-imagemin');

  	grunt.registerTask('default', ['clean', 'copy', 'sass', 'imagemin']);
}