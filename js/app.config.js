(function() {
  'use strict';

  angular.module('app').config(config);

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

  function config($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5mode(true);

    $stateProvider
      .state({
        name: 'home',
        url: '/',
        component: 'app'
      })
  }
})();
