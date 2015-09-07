'use strict';
module.exports = function (grunt) {
	grunt.initConfig({
		ava: {
			test: ['fixture.js']
		},
		shell: {
			ava: {
				command: 'grunt ava',
				options: {
					callback: function (_, stdout, stderr, cb) {
						cb(/1 test passed/.test(stdout));
					}
				}
			}
		}
	});

	grunt.loadTasks('tasks');
	grunt.loadNpmTasks('grunt-shell');
	grunt.registerTask('default', ['shell:ava']);
};
