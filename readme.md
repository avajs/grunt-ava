# grunt-ava [![Build Status](https://travis-ci.org/avajs/grunt-ava.svg?branch=master)](https://travis-ci.org/avajs/grunt-ava)

> Run [AVA](https://ava.li) tests

Please consider if you really need Grunt for this. Using a [npm run script](https://github.com/avajs/ava#initialize) would be better.


## Install

```
$ npm install --save-dev grunt-ava
```


## Usage

```js
require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

grunt.initConfig({
	ava: {
		test: ['test.js'],
		nycTest: {
			options: {
				verbose: true,
				nyc: true
			},
			files: {
				src: ['test.js']
			}
		}
	}
});

grunt.registerTask('default', ['ava']);
```

Adheres to AVA [options](https://github.com/avajs/ava#configuration) in package.json. You can also specify options in the plugin as seen above.

You can specify `nyc: true` in the plugin to run AVA with [`nyc`](https://github.com/istanbuljs/nyc). You must have `nyc` as a devDependency. `nyc` [options](https://github.com/istanbuljs/nyc#configuring-nyc) can be defined in package.json.


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
