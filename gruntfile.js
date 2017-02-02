'use strict';
module.exports = grunt => {
	grunt.initConfig({
		ava: {
			test: ['fixture.js'],
			test2: {
				options: {
					verbose: true,
					nyc: true
				},
				files: {
					src: ['fixture.js']
				}
			}
		},
		shell: {
			ava: {
				command: 'grunt ava',
				options: {
					callback(_, stdout, stderr, cb) {
						cb(/1.*passed/.test(stdout));
					}
				}
			}
		}
	});

	grunt.loadTasks('tasks');
	grunt.loadNpmTasks('grunt-shell');
	grunt.registerTask('default', ['shell:ava']);
};
