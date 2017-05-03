(function() {
  'use strict';

  angular.module('app')
    .component('home', {
      templateUrl: '/home.template.html',
      controller
    })

  function controller() {
    const vm = this;

    vm.$onInit = function() {
      vm.lists = [{
          title: 'My List',
          tasks: ['Do your homework', 'Go to school', 'Eat dinner', 'Go to the gym', 'Write in journal']
        },
        {
          title: 'Your List',
          tasks: ['Go shopping', 'Go to soccer game']
      }];
    }
  }
})();
