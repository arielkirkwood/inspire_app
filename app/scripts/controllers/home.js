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
      // var labels;
      // var data = [];

      // $http.get('https://stg-garcon.herokuapp.com/api/1/subscriptions/homescore/1/energy/usage/daily')
      //   .then(function(response) {
      //     labels = response.data.daily_energy_usage.map(Object.keys);
      //
      //   });

      // return {
      //   labels: labels,
      //   data: data
      // };

      // $scope.labels = HomeEnergyUsageService.labels;
      // $scope.data = HomeEnergyUsageService.data;

      HomeEnergyUsageService.get($routeParams, function(data) {
          $scope.labels = data.daily_energy_usage.map(Object.keys);
          $scope.data = [];

          data.daily_energy_usage.forEach(function (key, index) {
            $scope.data.push(data.daily_energy_usage[index][$scope.labels[index]]);
          });
      });
  }]);
