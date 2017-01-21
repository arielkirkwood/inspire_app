'use strict';

angular.module('inspireAppApp')
  .factory('HomeEnergyUsageService', ['$resource', function($resource) {
    return $resource('https://stg-garcon.herokuapp.com/api/1/subscriptions/homescore/:homeId/energy/usage/daily',
      {
        homeId: '@id'
      }
    );
  }]);
