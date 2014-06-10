'use strict';

//app module
var app = angular.module('app', [
  'ngRoute',
  'ngAnimate',
  'ngSanitize',
  'ui.router',
  'fastClick'
])

    .run(
      ['$rootScope', '$state', '$stateParams','$http',
          function ($rootScope, $state, $stateParams, $http) {
              //transclude state and stateParams to $rootScope
              $rootScope.state = $state;
              $rootScope.stateParams = $stateParams;
          }]);


//attach fastclick module for touch devices
angular.module('fastClick', []).
run(function () {
    FastClick.attach(document.body);
});