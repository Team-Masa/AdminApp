'use strict';

/**
 * @ngdoc function
 * @name itchackApp.controller:AddNewProductCtrl
 * @description
 * # AddNewProductCtrl
 * Controller of the itchackApp
 */
angular.module('itchackApp')
    .controller('AddNewProductCtrl', function($scope) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.register = function() {

            var rfid = $scope.item.id;
            var name = $scope.item.name;
            var price = $scope.item.price;
            console.log(rfid + "# " + name + " # " + price);
        }
    });
