(function() {
  'use strict';

  angular.module('app', [])
    .component('delete', {
      bindings: {
        listId: '<',
        taskId: '<'
      },
      template: `
        <form ng-submit="$ctrl.delete($ctrl.id)">
          <button type="submit" class="btn del-btn"><i class="fa fa-trash"></i></button>
        </form>
      `
    })
})();
