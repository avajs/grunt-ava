'use strict';
const childProcess = require('child_process');
const dargs = require('dargs');
const resolveCwd = require('resolve-cwd');

const BIN = require.resolve('ava/cli.js');

module.exports = grunt => {
	grunt.registerMultiTask('ava', 'Run AVA tests', function () {
		const cb = this.async();
		const opts = this.options();
		const args = [BIN].concat(this.filesSrc, '--color', dargs(opts, {excludes: ['nyc']}));

		if (opts.nyc) {
			const nycBin = resolveCwd('nyc/bin/nyc.js');

			if (nycBin) {
				args.unshift(nycBin);
			} else {
				grunt.warn('Couldn\'t find the `nyc` binary');
				cb();
				return;
			}
		}

		childProcess.execFile(process.execPath, args, (err, stdout, stderr) => {
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
