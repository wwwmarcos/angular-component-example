(function() {
  'use strict'

   angular
    .module('Index', [])
    .controller('IndexController', IndexController)

    function IndexController(){
      var vm = this
      init()
      
      function init(){
        vm.itens = [{id: '1', name: 'Lightsaber'}, {id: '2', name: 'Star Death'}, {id: '3', name: 'Plasma Cannon'}]
      }

    }

})()