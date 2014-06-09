'use strict';

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
              $http.defaults.useXDomain = true;
		      //transclude state and stateParams to $rootScope
              $rootScope.state = $state;
              $rootScope.stateParams = $stateParams;
          }]);


angular.module('fastClick', []).
run(function () {
    FastClick.attach(document.body);
});