(function() {
  'use strict';

  angular.module('app')
    .component('list', {
      controller: controller,
      bindings: {
        list: '<',
        deleteList: '&',
        deleteTask: '&'
      },
      template: `
        <div class="list-header">
          <h2>{{$ctrl.list.title}}</h2>

          <button ng-click="$ctrl.deleteList({ listId: $ctrl.list.id} )" class="btn del-btn">
            <i class="fa fa-trash"></i>
          </button>
        </div>

        <ul>
          <div ng-repeat="task in $ctrl.list.tasks">
            <div class="item" ng-mouseenter="$ctrl.hovering(task.id, $ctrl.list.id)" ng-mouseleave="$ctrl.notHovering()">
              <li ng-show="!$ctrl.showEditForm(task.id, $ctrl.list.id)">{{task.name}}</li>

              <div ng-show="$ctrl.showEditOpt(task.id, $ctrl.list.id)">
                <button class="btn edit-btn" ng-click="$ctrl.clickedToEnterEdit(task.id, $ctrl.list.id)">
                  <i class="fa fa-pencil"></i>
                </button>
              </div>

              <div class="edit-item" ng-show="$ctrl.showEditForm(task.id, $ctrl.list.id)">
                <form novalidate ng-submit="">
                  <textarea name="task" class="item-to-add" warp="soft" autofocus>{{task.name}}</textarea>
                  <div>
                    <button type="submit" class="add-btn btn">Save</button>
                    <button type="button" ng-click="$ctrl.clickedToExitEdit()" class="exit-btn" id="exit-add-form">
                      <i class="fa fa-times"></i>
                    </button>
                  </div>
                </form>

                <button ng-click="$ctrl.deleteTask({ listId: $ctrl.list.id, taskId: task.id })" class="btn del-btn">
                  <i class="fa fa-trash"></i>
                </button>
              </div>
            </div>
          </div>
        </ul>

        <div class="tools">
          <button
            class="add-item"
            ng-show="!$ctrl.showAddForm($ctrl.list.id)"
            ng-click="$ctrl.clickedToEnterAdd($ctrl.list.id)">
            Add an item...
          </button>

          <form novalidate ng-submit="" ng-show="$ctrl.showAddForm($ctrl.list.id)">
            <textarea name="task" placeholder="Add item" class="item-to-add" warp="soft" autofocus></textarea>
            <div>
              <button type="submit" class="add-btn btn">Add</button>
              <button type="button" ng-click="$ctrl.clickedToExitAdd()" class="exit-btn" id="exit-add-form">
                <i class="fa fa-times"></i>
              </button>
            </div>
          </form>
        </div>
      `
    });

    function controller() {
      const vm = this;
      console.log(vm);

      vm.$onInit = function() {
        vm.currentTask = 0;
        vm.currentList = 0;
        vm.clickedTask = 0;
        vm.clickedList = 0;
        vm.listToAddTo = 0;
        vm.editing = false;
        vm.btnText = {
          add: 'Add',
          save: 'Save'
        }
      }

      vm.hovering = function(taskId, listId) {
        vm.currentTask = taskId;
        vm.currentList = listId;
      }

      vm.notHovering = function() {
        vm.currentTask = 0;
        vm.currentList = 0;
      }

      vm.showEditOpt = function(taskId, listId) {
        if (vm.currentTask === taskId && vm.currentList === listId && !vm.editing) {
          return true;
        }

        return false;
      }

      vm.clickedToEnterEdit = function(taskId, listId) {
        vm.editing = true;
        vm.clickedTask = taskId;
        vm.clickedList = listId;
      }

      vm.clickedToExitEdit = function() {
        vm.editing = false;
        vm.clickedTask = 0;
        vm.clickedList = 0;
      }

      vm.showEditForm = function(taskId, listId) {
        if (vm.clickedTask === taskId && vm.clickedList === listId) {
          return true;
        }

        return false;
      }

      vm.clickedToEnterAdd = function(listId) {
        vm.listToAddTo = listId;
      }

      vm.clickedToExitAdd = function() {
        vm.listToAddTo = 0;
      }

      vm.showAddForm = function(listId) {
        if (vm.listToAddTo === listId) {
          return true;
        }

        return false;
      }
    }
})();
