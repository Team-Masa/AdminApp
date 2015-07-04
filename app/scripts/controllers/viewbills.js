'use strict';

/**
 * @ngdoc function
 * @name itchackApp.controller:ViewbillsCtrl
 * @description
 * # ViewbillsCtrl
 * Controller of the itchackApp
 */
angular.module('itchackApp')
    .controller('ViewbillsCtrl', function($scope, $http) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        //     $scope.bills = [{
        //       what: "asd",
        //       who: "dd",
        //       notes: "aaa"
        //     },
        // {
        //       what: "asd",
        //       who: "dd",
        //       notes: "aaa"
        //     },{
        //       what: "asd",
        //       who: "dd",
        //       notes: "aaa"
        //     }
        //     ]
        $scope.bills = new Array();
        $http({
            method: 'GET',
            url: 'http://172.16.1.72:1337/user'
        }).success(function(data) {
            data.forEach(function(task) {
                if (task.bills) {
                    var items = new Array();
                    task.bills.forEach(function(list) {
                        list.items.forEach(function(list_each) {
                            items.push(list_each);
                        })
                        $scope.bills.push(items);
                    })

                }
            });
            console.log($scope.bills);
        })
    });
