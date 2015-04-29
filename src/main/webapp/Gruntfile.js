module.exports = function(grunt) {
	// Load grunt tasks automatically
	require('load-grunt-tasks')(grunt);

	// Time how long tasks take. Can help when optimizing build times
	// require('time-grunt')(grunt);
	var blog = {
		app : require('./bower.json').appPath || 'app',
		path : '',
		dist : '../myapp',
		bundle : 'bundle'
	};
	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json'),
		less : {
			development : {
				files : [ {
					src : [ blog.path + 'styles/less/*.less' ],
					dest : blog.path + 'styles/css/style.css'
				} ]
			},
		},
		// Empties folders to start fresh
		clean : {
			dist : {
				files : [ {
					dot : true,
					src : [ '.tmp', blog.dist + '/images/*',
							blog.dist + '/scripts/*', blog.dist + '/styles/*',
							blog.dist + '/views/*',
							blog.dist + '/WEB-INF/web.xml',
							blog.dist + '/index.html',
							'!' + blog.dist + '/.git{,*/}*' ]
				} ]
			},
			server : '.tmp'
		},
		connect : {
			options : {
				port : 9000,
				hostname : 'localhost', // 默认就是这个值，可配置为本机某个 IP，localhost 或域名
				livereload : 35729
			// 声明给 watch 监听的端口
			},
			server : {
				options : {
					open : true, // 自动打开网页 http://
					base : [ blog.path // 主目录
					]
				}
			},
			test : {
				options : {
					port : 9001,
					middleware : function(connect) {
						return [
								connect.static('.tmp'),
								connect.static('test'),
								connect().use('/bower_components',
										connect.static('./bower_components')),
								connect.static(blog.app) ];
					}
				}
			}
		},
		// 自动将bower中的包引入到index.html中
		// For JavaScript dependencies, pop this in your HTML file:
		// <!-- bower:js -->
		// <!-- endbower -->
		wiredep : {
			app : {
				src : [ blog.path + 'index.html' ]
			}
		},
		copy : {
			main : {
				files : [ {
					expand : true,
					src : [ blog.path + 'images/**' ],
					dest : blog.dist
				}, {
					expand : true,
					src : [ blog.path + 'views/**' ],
					dest : blog.dist
				}, {
					expand : true,
					src : [ blog.path + 'index.html' ],
					dest : blog.dist
				}, {
					expand : true,
					src : [ blog.path + 'WEB-INF/**' ],
					dest : blog.dist
				}, {
					expand : true,
					src : [ blog.path + 'META-INF/**' ],
					dest : blog.dist
				}, {
					expand : true,
					cwd : blog.path + 'bower_components/bootstrap/dist',
					src : 'fonts/*',
					dest : blog.dist + '/styles'
				} ]
			}
		},
		useminPrepare : {
			html : blog.path + 'index.html',
			options : {
				dest : blog.dist,
				flow : {
					html : {
						steps : {
							js : [ 'concat', 'uglifyjs' ],
							css : [ 'cssmin' ]
						},
						post : {}
					}
				}
			}
		},
		// Renames files for browser caching purposes
		filerev : {
			dist : {
				src : [ blog.dist + '/scripts/{,*/}*.js',
						blog.dist + '/styles/{,*/}*.css',
						// 'dist/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
						blog.dist + '/styles/*' ]
			}
		},
		// Performs rewrites based on filerev and the useminPrepare
		// configuration
		usemin : {
			html : [ blog.dist + '/{,*/}*.html' ],
			css : [ blog.dist + '/styles/{,*/}*.css' ],
			options : {
				assetsDirs : [ blog.dist, blog.dist + '/images' ]
			}
		},
		htmlmin : {
			dist : {
				options : {
					collapseWhitespace : true,
					conservativeCollapse : true,
					collapseBooleanAttributes : true,
					removeCommentsFromCDATA : true,
					removeOptionalTags : true
				},
				files : [ {
					expand : true,
					cwd : blog.dist,
					src : [ blog.path + '*.html',
							blog.path + 'views/{,*/}*.html',
							blog.path + 'templates/{,*/}*.html' ],
					dest : blog.dist
				} ]
			}
		},
		// unit-test settings
		karma : {
			unit : {
				configFile : 'test/karma-conf.js',
				singleRun : false
			}
		},
		watch : {
			styles : {
				// Which files to watch (all .less files recursively in the less
				// directory)
				files : [ 
				        blog.path + '*.html', 
				        blog.path + 'views/*.html',
						blog.path + 'styles/less/*.less', 
						blog.path + 'scripts/*.js',
						blog.path + 'scripts/controllers/*.js' 
				],
				tasks : [ 'clean', 'less', 'wiredep', 'useminPrepare','concat', 'copy', 'cssmin', 'uglify', 'usemin', 'htmlmin' ],
				options : {
					forceWatchMethod : 'old',
					debounceDelay : 10,
					livereload : true
				}
			}
//		,
//			livereload : {
//				options : {
//					livereload : '<%=connect.options.livereload%>' // 监听前面声明的端口
//				// 35729
//				},
//
//				files : [ // 下面文件的改变就会实时刷新网页
//				blog.path + '*.html', blog.path + 'views/*.html',
//						blog.path + 'styles/*.css', blog.path + 'scripts/*.js',
//						blog.path + 'scripts/controllers/*.js' ]
//			}
//
		}
	});
	grunt.registerTask('serve', [ 'connect:server', 'watch' ]);
	grunt.registerTask('default', [ 'watch' ]);
	grunt.registerTask('build', [ 'clean', 'less', 'wiredep', 'useminPrepare','concat', 'copy', 'cssmin', 'uglify', 'usemin', 'htmlmin' ]);
	grunt.registerTask('test', [ 'karma' ]);
};