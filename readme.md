# String interpolate

Simple string interpolation

## Install

 * via [npm](https://npmjs.org) `npm install string-interpolate`
 * via [component](http://component.io) `component install alexeyraspopov/string-interpolate`
 * via [bower](http://bower.io) `bower install string-interpolate`

## API

	interpolate(template, data);
	
 * `template` - template string. Default delimiters are `{}`
 * `data` - simple object

## Usage

	var interpolate = require('string-interpolate');
	
	interpolate('{ greeting }, { user.name }', {
		greeting: 'Hello',
		user: {
			name: 'Jane'
		}
	});
	
If `data` is not specified - returns template function

	var greet = interpolate('Hello { name }');
	
	greet({ name: 'Jane' }); // Hello Jane
	greet({ name: 'Mike' }); // Hello Mike
	
## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License) (c) Alexey Raspopov

