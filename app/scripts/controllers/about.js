'use strict';

/**
 * @ngdoc function
 * @name itchackApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the itchackApp
 */
angular.module('itchackApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
