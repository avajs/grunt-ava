'use strict';
var childProcess = require('child_process');
var dargs = require('dargs');
var resolveCwd = require('resolve-cwd');

var BIN = require.resolve('ava/cli.js');

module.exports = function (grunt) {
	grunt.registerMultiTask('ava', 'Run AVA tests', function () {
		var cb = this.async();
		var opts = this.options();
		var args = [BIN].concat(this.filesSrc, '--color', dargs(opts, {excludes: ['nyc']}));

		if (opts.nyc) {
			var nycBin = resolveCwd('nyc/bin/nyc.js');

			if (nycBin) {
				args.unshift(nycBin);
			} else {
				grunt.warn('Couldn\'t find the `nyc` binary');
				cb();
				return;
			}
		}

		childProcess.execFile(process.execPath, args, function (err, stdout, stderr) {
			if (err) {
				grunt.warn(stderr || stdout || err);
				cb();
				return;
			}

			grunt.log.write(stderr + stdout);
			cb();
		});
	});
};
