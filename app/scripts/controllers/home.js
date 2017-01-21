'use strict';

/**
 * @ngdoc function
 * @name inspireAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the inspireAppApp
 */
angular.module('inspireAppApp')
  .controller('HomeCtrl', ['$scope', 'HomeService', function ($scope, HomeService) {
    $scope.labels = HomeService.labels;
    $scope.series = HomeService.series;

    $scope.data = HomeService.data;
  }]);
