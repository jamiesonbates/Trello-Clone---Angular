(function() {
  'use strict';

  angular.module('app')
    .component('newList', {
      template: `
        <div class="new-list">
          <form>
            <input type="text" name="title" placeholder="Create a list" autocomplete="off" wrap="soft">
            <button type="submit" class="btn list-btn">Create</button>
          </form>
        </div>
      `
    })
})();
