'use strict';
angular.module('main')
.controller('TestPageCtrl', function ($log) {

  $log.log('Hello from your Controller: Test-pageCtrl in module main:. This is your controller:', this);

});
