'use strict';

/**
 * @ngdoc function
 * @name itchackApp.controller:HomepageCtrl
 * @description
 * # HomepageCtrl
 * Controller of the itchackApp
 */
angular.module('itchackApp')
  .controller('HomepageCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
