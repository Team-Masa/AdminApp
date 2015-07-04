'use strict';

/**
 * @ngdoc function
 * @name itchackApp.controller:AddmessageCtrl
 * @description
 * # AddmessageCtrl
 * Controller of the itchackApp
 */
angular.module('itchackApp')
    .controller('AddmessageCtrl', function($scope, $routeParams, $http, messageData) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.name = messageData.getData().name;
        $scope.price = messageData.getData().price;
        $scope.id = messageData.getData().itemId;


        // $http({
        //     method: 'GET',
        //     url: 'http://172.16.1.72:1337/inventory'
        // }).success(function(data) {
        //   data.forEach(function(task){
        //     if (task.id == id){
        //       $scope.name = task.name;
        //       console.log($scope.name + "name")
        //     }
        //   })
        // })
        console.log($scope.name);
    });
