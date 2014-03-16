var interpolate = require('./index'),
	expect = require('expect.js');

describe('string-interpolate', function(){
	var template = 'Hello { name } and { anotherName }',
		data = { name: 'Jane', anotherName: 'Mike' };

	it('should interpolate', function(){

		expect(interpolate(template, data)).to.be('Hello Jane and Mike');
	});

	it('should returns template function if data not specified', function(){
		var templateFn = interpolate(template);

		expect(templateFn).to.be.a('function');
		expect(templateFn(data)).to.be('Hello Jane and Mike');
	});

	it('should works with nested keypath', function(){
		var template = 'username: { user.name }, twitter: { user.social.twitter }',
			data = { user: { name: 'Jane', social: { twitter: '@Jane' } } };

		expect(interpolate(template, data)).to.be('username: Jane, twitter: @Jane');
	});

	it('should works with arrays', function(){
		var template = 'items: { 0 }, { 1 }',
			array = ['first', 'second'];

		expect(interpolate(template, array)).to.be('items: first, second');
	});
});
