angular.module('controller', []).controller('MeuController', function MeuController() {

  this.alerta = function alerta() {
    window.alert('Alerta!');
  };

});