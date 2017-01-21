'use strict';

angular.module('inspireAppApp')
  .factory('HomeService', function() {
    var labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    var series = ['Series A', 'Series B'];
    var data = [
      [65, 59, 80, 81, 56, 55, 40],
      [28, 48, 40, 19, 86, 27, 90]
    ];

    return {
      labels: labels,
      series: series,
      data: data
    };

    // return $resource('/api/users/:homeId',
    //   {
    //     homeId: '@id'
    //   }
    // );
  });
