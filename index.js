module.exports = function interpolate(template, data){
	if(arguments.length < 2){
		return interpolate.bind(null, template);
	}

	return template.replace(/\{([^\}]+)\}/g, function(match, key){
		var tokens = key.trim().split('.');

		return tokens.reduce(function(data, key){
			return data[key];
		}, data);
	});
};
