(function() {
  'use strict';

  angular.module('app')
    .component('list', {
      templateUrl: '/js/components/list.template.html',
      bindings: {
        lists: '<'
      }
    });
})();
