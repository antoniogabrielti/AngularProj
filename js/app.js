

(function() {
  var app = angular.module('appLista', []);
  
  var usersWin = [{
    id: 1,
    nome: "Antonio Miranda",
    dtaNascimento: "1990-05-14",
    empresa: "Ubots",
    email: "antonio@ubots.com.br",
    cadastrado: false,
    servicos: [{
        data: "2017-09-26",
        servico: "Lavanderia",
        preco: 62.70
    },{
        data: "2017-09-28",
        servico: "Higienização",
        preco: 120.38 
    }]
},{
    id: 2,
    nome: "Johnny Deep",
    dtaNascimento: "1963-06-09",
    empresa : "Wanner",
    email: "Johnny@wannerbros.com",
    cadastrado: true,
    servicos:[{
        data: "2017-06-22",
        servico: "Estacionamento",
        preco: 250
    },{
        data:"2017-08-15",
        servico: "Almoço",
        preco: 547,
    }]
}];

  app.controller('StoreController', function() {
    this.users = usersWin;
  });
  
})();

