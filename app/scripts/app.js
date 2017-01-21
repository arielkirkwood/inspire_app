'use strict';

/**
 * @ngdoc overview
 * @name inspireAppApp
 * @description
 * # inspireAppApp
 *
 * Main module of the application.
 */
angular
  .module('inspireAppApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'chart.js'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      })
      .otherwise({
        redirectTo: '/home'
      });
  });
