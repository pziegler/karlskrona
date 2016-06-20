var angular = require('angular');
require('angular-sanitize');
require('angular-ui-router-tabs');
var header = require('./header');
var title = require('./title');
var footer = require('./footer');

var navModule = 'navigation';

module.exports = navModule;

angular
	.module(navModule, ['ui.router.tabs'])
	.component('appHeader', header)
	.component('appTitle', title)
	.component('appFooter', footer);
