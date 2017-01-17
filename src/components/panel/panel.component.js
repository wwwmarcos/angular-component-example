(function() {
  'use strict'

  angular
    .module('PanelComponent', [])
    .component('panel', {
      templateUrl: 'src/components/panel/panel.template.html',
      controller: PanelComponentController,
      bindings: {
        title: '@',
        itens: '<'
      }
    })

  function PanelComponentController() {
    var $ctrl = this;
    $ctrl.selectItem = selectItem;
    $ctrl.removeItem = removeItem;
    $ctrl.$onInit = onInit;

    function onInit() {
      $ctrl.selectedItens = []
    }

    function selectItem(item) {
      $ctrl.selectedItens.push(item)
    }

    function removeItem(item) {
      var index = $ctrl.selectedItens.indexOf(item)
      $ctrl.selectedItens.splice(index, 1);
    }

  }

})()