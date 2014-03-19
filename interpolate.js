!function(module, global){
var exports = module.exports;
module.exports = function interpolate(template, data){
	if(arguments.length < 2){
		return interpolate.bind(null, template);
	}

	return template.replace(/\{([^\}]+)\}/g, function(match, keypath){
		return new Function('_', 'return _.' + keypath.trim())(data);
	});
};

global.interpolate = module.exports;
}({ exports: {} }, function(){ return this; }());