

(function() {
  var app = angular.module('appLista', []);
  
  var gems = [{name:'Azurite', price: 110.50},
              {name:'Bloodstone', price: 22.90},
              {name:'Zircon', price: 1100}];

  app.controller('StoreController', function() {
    this.products = gems;
  });
  
})();
