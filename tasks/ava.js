'use strict';
var path = require('path');
var childProcess = require('child_process');
var BIN = path.join('node_modules', '.bin', 'ava');

module.exports = function (grunt) {
	grunt.registerMultiTask('ava', 'Run AVA tests', function () {
		var cb = this.async();
		var args = this.filesSrc.concat('--color');

		childProcess.execFile(BIN, args, function (err, stdout, stderr) {
			if (err) {
				grunt.warn(err);
				cb();
				return;
			}

			grunt.log.write(stderr);
			cb();
		});
	});
};
