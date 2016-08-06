'use strict';
var childProcess = require('child_process');

var BIN = require.resolve('ava/cli.js');

module.exports = function (grunt) {
	grunt.registerMultiTask('ava', 'Run AVA tests', function () {
		var cb = this.async();
		var args = this.filesSrc.concat('--color');

		args.unshift(BIN);

		childProcess.execFile(process.execPath, args, function (err, stdout, stderr) {
			if (err) {
				grunt.warn(stderr);
				cb();
				return;
			}

			grunt.log.write(stderr);
			cb();
		});
	});
};
