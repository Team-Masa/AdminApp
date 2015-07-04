'use strict';

/**
 * @ngdoc function
 * @name itchackApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the itchackApp
 */
angular.module('itchackApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
