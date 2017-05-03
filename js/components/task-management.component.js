(function() {
  'use strict';

  angular.module('app', [])
    .component('taskManagement', {
      template: `
        <form action="/task" method="POST" class="hide">
          <input type="hidden" name="userId" value="{{../userId}}">
          <textarea name="task" placeholder="Add item" class="item-to-add" warp="soft" autofocus></textarea>
          <div class="add-form-btns">
            <button type="submit" class="add-btn btn">Add</button>
            <button class="exit-btn" id="exit-add-form"><i class="fa fa-times"></i></button>
          </div>
        </form>
      `
    })
})();
