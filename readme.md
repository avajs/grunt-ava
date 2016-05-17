# grunt-ava [![Build Status](https://travis-ci.org/avajs/grunt-ava.svg?branch=master)](https://travis-ci.org/avajs/grunt-ava)

> Run [AVA](https://ava.li) tests

Please consider if you really need grunt for this. Using a [npm run script](https://github.com/avajs/ava#initialize) would be better.


## Install

```
$ npm install --save-dev grunt-ava
```


## Usage

```js
require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

grunt.initConfig({
	ava: {
		target: ['test.js']
	}
});

grunt.registerTask('default', ['ava']);
```


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
