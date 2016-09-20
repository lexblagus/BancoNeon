/*
================================================================================
 ////////        ///////                                                        
    /////          /////                                                        
    ////           ////                                                         
   /////           ////                                                         
   /////           ////                                                         
   /////          /////                                                         
   ////           /////                                                         
  /////           ////                                                          
  /////           ////                             ///                          
  ///// ////     /////     ///// ////     //////   //////////    ////     ///// 
  //// /   ///   /////   ////  / ////    ///   //// //  ////    /////   //   ///
 //////    ///   ////   ////    ////    ////   ////     ////    ////   ///   ///
 /////     ////  ////   ////    ////   /////   ////    /////    ////   ////  ///
 ////      //// /////  ////     ////   ////    ////    /////    ////   //////   
 ////     ///// ///// /////     ////   ////   /////    ////    /////   ///////  
/////     ///// ////  /////     ///    ////   ////     ////    ////     /////// 
/////     ////  ////  /////    ////    ////   ///      ////    ////       ///// 
////      //// /////  ////     ////  //   /////       /////   /////  ////  //// 
////     ////  /////  ////    /////  //               ////    /////  ////   /// 
////     ///   /////  ////    ////  /////////////     ////   ////// /////   /// 
 ///    ///    ////  / ///   / /// / /////////////    ////  /  /// /  //   ///  
  ///////       /////   /////   ///   ////////////     /////   ////    /////    
                                      ////////////                              
                                     //         //                              
                                    //          //                              
                                    //          /                               
                                    //         /                                
                                     //      //                                 
                                      ///////                                   
================================================================================
                              Lex Blagus, web systems architect <http://blag.us>
================================================================================
*/
module.exports = function(grunt) {
	grunt.initConfig(
		{
			// Cleanup destination folder
			clean:{
				clean: ['build/*']
			},

			// Update refs in html
			replace: {
				dist: {
					options: {
						prefix:'',
						patterns: [
							{
								match:'<link rel="stylesheet" type="text/css" href="css/reset.css" media="all">',
								replacement:''
							},
							{
								match:'<link rel="stylesheet" type="text/css" href="css/layout.css" media="all">',
								replacement:''
							},
							{
								match:'<link rel="stylesheet" type="text/css" href="css/animation.css" media="all">',
								replacement:'<link rel="stylesheet" type="text/css" href="css/styles.min.css" media="all">'
							},
							{
								match:'<script type="text/javascript" src="js/uix.js"></script>',
								replacement:'<script type="text/javascript" src="js/uix.min.js"></script>'
							}
						]
					},
					files: [
						{
							expand: true,
							flatten: true,
							src: ['src/index.html'],
							dest: 'tmp/'
						}
					]
				}
			},
			
			// Compress HTML
			htmlmin: {
				dist: {
					options: {
						removeComments: true,
						collapseWhitespace: true
					},
					files: {
						'build/index.html': 'tmp/index.html'
					}
				}
			},

			// Concatenate CSS files
			concat: {
				options: {
					separator: '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'
				},
				dist: {
					src: ['src/css/reset.css', 'src/css/layout.css', 'src/css/animation.css'],
					dest: 'tmp/concat.css'
				}
			},

			// Minimize the single CSS file
			cssmin: {
				build: {
					src: 'tmp/concat.css',
					dest: 'build/css/styles.min.css'
				}
			},

			// Minimize Javascript file
			uglify: {
				build: {
					files: {
						'build/js/uix.min.js': ['src/js/uix.js']
					}
				}
			},

			// Compress images
			imagemin: {
				main: {
					files: [{
						expand: true,
						cwd: 'src/',
						src: ['img/*.{png,jpg,gif}'],
						dest: 'build/'
					}]
				}
			}

			// Done.
		}
	);
	
	// Load up tasks
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-replace');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-imagemin');

	// Default task
	grunt.registerTask(
		'default',
		[
			'clean',
			'replace',
			'htmlmin',
			'concat',
			'cssmin',
			'uglify',
			'imagemin'
		]
	);

};