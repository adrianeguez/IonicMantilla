angular.module('starter.controllers', [])


.controller('EmpresaCtrl', function ($scope, ClienteFactory) {
  var vm = $scope;



  $scope.opcionesLista = {
    mostrarBorrar: false
  };

  $scope.edit = function(item) {
    alert('Edit Item: ' + item.id);
  };
  vm.editarCliente = function editarCliente (cliente){



  };
  $scope.share = function(item) {
    alert('Share Item: ' + item.id);
  };

  $scope.moveItem = function(item, fromIndex, toIndex) {
    $scope.items.splice(fromIndex, 1);
    $scope.items.splice(toIndex, 0, item);
  };

  $scope.onItemDelete = function(item) {
    console.log(item);
    console.log();

      ClienteFactory.delete({
        id:item.id
      })
      .$promise.then(
      function borroClienteOk(ClienteBorrado){
        console.log(ClienteBorrado);
        vm.clientes.splice(vm.clientes.indexOf(item),1);
      },
        function borroClienteError(error){
          console.log(error);
      })
  };

//  $scope.items = [
//    { id: 0 },
//    { id: 1 },
//    { id: 2 },
//    { id: 3 },
//    { id: 4 },
//    { id: 5 },
//    { id: 6 },
//    { id: 7 },
//    { id: 8 },
//    { id: 9 },
//    { id: 10 },
//    { id: 11 },
//    { id: 12 },
//    { id: 13 },
//    { id: 14 },
//    { id: 15 },
//    { id: 16 },
//    { id: 17 },
//    { id: 18 },
//    { id: 19 },
//    { id: 20 },
//    { id: 21 },
//    { id: 22 },
//    { id: 23 },
//    { id: 24 },
//    { id: 25 },
//    { id: 26 },
//    { id: 27 },
//    { id: 28 },
//    { id: 29 },
//    { id: 30 },
//    { id: 31 },
//    { id: 32 },
//    { id: 33 },
//    { id: 34 },
//    { id: 35 },
//    { id: 36 },
//    { id: 37 },
//    { id: 38 },
//    { id: 39 },
//    { id: 40 },
//    { id: 41 },
//    { id: 42 },
//    { id: 43 },
//    { id: 44 },
//    { id: 45 },
//    { id: 46 },
//    { id: 47 },
//    { id: 48 },
//    { id: 49 },
//    { id: 50 }
//  ];


  vm.nuevoCliente = {
    nombreEmpresa: '',
    nombreComercial: '',
    descripcion: '',
    fechaCreacion: '',
    direccion: '',
    telefono: '',
    correo: ''
  };


  ClienteFactory.query()
    .$promise.then(respondioOk, respondioError);


  vm.anadirCliente = anadirCliente;






  function anadirCliente() {

    ClienteFactory.save({
        nombreEmpresa: vm.nuevoCliente.nombreEmpresa,
        nombreComercial: vm.nuevoCliente.nombreComercial,
        descripcion: vm.nuevoCliente.descripcion,
        fechaCreacion: vm.nuevoCliente.fechaCreacion,
        direccion: vm.nuevoCliente.direccion,
        telefono: vm.nuevoCliente.telefono,
        correo: vm.nuevoCliente.correo
      })
      .$promise.then(guardoCliente, errorGuardoCliente);

  };


  function guardoCliente(data) {
    vm.clientes.push(data);

    vm.nuevoCliente = {
      nombreEmpresa: '',
      nombreComercial: '',
      descripcion: '',
      fechaCreacion: '',
      direccion: '',
      telefono: '',
      correo: ''
    };

  }

  function errorGuardoCliente(data) {
    console.log(data);
  }


  function respondioOk(data) {
    vm.clientes = data;
    console.log(data);
  }

  function respondioError(error) {
    console.log(error);
  }

})

.controller('DashCtrl', function ($scope) {})

.controller('ChatsCtrl', function ($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function (chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function ($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
