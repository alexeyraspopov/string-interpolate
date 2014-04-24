#!/usr/bin/env node
var interpolate = require('./index'),
	clify = require('clify'),
	multiline = require('multiline');

clify(interpolate, {
	version: require('./package').version,
	help: multiline.stripIndent(function(){/*
		Usage:
		  $ interpolate <string> <json-data>

		Example:
		  $ interpolate 'Hello { name }' '{ "name": "Ann" }'
		  Hello Ann
	*/})
}, function(args){
	return [args[2], JSON.parse(args[3])];
});
