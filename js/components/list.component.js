(function() {
  'use strict';

  angular.module('app', [])
    .component('list', {
      bindings: {
        lists: '<'
      },
      template: `
        <div class="list">
          <div class="list-header">
            <h2>{{$ctrl.list.title}}</h2>

            <delete
              list-id="$ctrl.list.id"
              delete="$ctrl.deleteList">
            </delete>
          </div>

          <ul ng-repeat="task in $ctrl.list.tasks">
            <div class="item">
              <li>{{task}}</li>

              <task-management change="$ctrl.updateTask"></task-management>

              <delete
                list-id="$ctrl.list.id"
                task-id={{task.id}}
                delete="$ctrl.deleteTask">
              </delete>
            </div>
          </ul>

          <div class="tools">
            <button class="add-item">Add an item...</button>

            <task-management change="$ctrl.addTask"></task-management>
          </div>
        </div>
      `
    });
})();
