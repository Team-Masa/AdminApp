'use strict';

/**
 * @ngdoc function
 * @name itchackApp.controller:AddNewProductCtrl
 * @description
 * # AddNewProductCtrl
 * Controller of the itchackApp
 */
angular.module('itchackApp')
    .controller('AddNewProductCtrl', function($scope, $http, $location, messageData) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.register_product = function(isValid) {
            if (isValid) {
                var rfid = $scope.item.id;
                var name = $scope.item.name;
                var price = $scope.item.price;
                console.log(rfid + "# " + name + " # " + price);
                $http.post('http://172.16.1.72:1337/inventory', {
                    itemId: rfid,
                    name: name,
                    price: price
                }).
                success(function(data, status, headers, config) {
                    // this callback will be called asynchronously
                    // when the response is available
                    messageData.setData(data);
                    console.log(messageData.getData());
                    $location.path("/addMessage");

                }).
                error(function(data, status, headers, config) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                });
            }
        }
    });
