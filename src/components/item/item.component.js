(function() {
  'use strict'

  angular
    .module('ItemComponent', [])
    .component('item', {
      templateUrl: 'src/components/item/item.template.html',
      controller: ItemComponentController,
      bindings: {
        target: '<',
      },
      require: {
        father: '^panel'
      },
    })

  function ItemComponentController() {
    var $ctrl = this
    $ctrl.toggle = toggle
    $ctrl.$onInit = onInit;

    function onInit() {
      $ctrl.target.selected = false
    }

    function toggle(item) {
      if (isSelected(item)) {
        item.selected = false
        return $ctrl.father.removeItem(item)
      }

      item.selected = true;
      return $ctrl.father.selectItem(item)
    }

    function isSelected(item) {
      return item.selected
    }

  }

})()