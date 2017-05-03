(function() {
  'use strict';

  angular.module('app', [])
    .component('newList', {
      template: `
        <div class="new-list">
          <form action="/list/{{userId}}" method="POST">
            <input type="text" name="title" placeholder="Create a list" autocomplete="off" wrap="soft">
            <button type="submit" class="btn list-btn">Create</button>
          </form>
        </div>
      `
    })
})();
