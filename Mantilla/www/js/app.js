// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services','ngResource'])

.run(function ($ionicPlatform) {
  $ionicPlatform.ready(function () {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function ($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the home directive
    .state('home', {
    url: '/home',
    abstract: true,
    templateUrl: 'templates/home.html'
  })

  // Each home has its own nav history stack:
  .state('home.empresa', {
      url: '/empresa',
      views: {
        'home-empresa': {
          templateUrl: 'templates/home-empresa.html',
          controller: 'EmpresaCtrl'
        }
      }
    })
    .state('home.dash', {
      url: '/dash',
      views: {
        'home-dash': {
          templateUrl: 'templates/home-dash.html',
          controller: 'DashCtrl'
        }
      }
    })

  .state('home.chats', {
      url: '/chats',
      views: {
        'home-chats': {
          templateUrl: 'templates/home-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('home.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'home-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('home.account', {
    url: '/account',
    views: {
      'home-account': {
        templateUrl: 'templates/home-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/home/dash');

});
