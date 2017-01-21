'use strict';

angular.module('inspireAppApp')
  .factory('HomeSummaryService', ['$resource', function($resource) {
    return $resource('https://stg-garcon.herokuapp.com/api/1/subscriptions/homescore/:homeId/summary',
      {
        homeId: '@id'
      }
    );
  }]);
