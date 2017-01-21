'use strict';

/**
 * @ngdoc function
 * @name inspireAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the inspireAppApp
 */
angular.module('inspireAppApp')
  .controller('HomeCtrl', [
    '$scope',
    '$routeParams',
    'HomeSummaryService',
    'HomeEnergyUsageService',
    function ($scope, $routeParams, HomeSummaryService, HomeEnergyUsageService) {
      if ($routeParams.homeId === '1') {
        $scope.homeName = 'Philadelphia Apartment';
      } else if ($routeParams.homeId === '2') {
        $scope.homeName = 'Beach House';
      }

      HomeSummaryService.get($routeParams, function(data) {
        $scope.homeSummary = data;
      });

      HomeEnergyUsageService.get($routeParams, function(data) {
          $scope.labels = data.daily_energy_usage.map(Object.keys);
          $scope.data = [];

          data.daily_energy_usage.forEach(function (key, index) {
            $scope.data.push(data.daily_energy_usage[index][$scope.labels[index]]);
          });
      });
  }]);
