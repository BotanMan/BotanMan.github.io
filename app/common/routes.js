app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        // login prototype
        //.state('login', {
        //    url: "/login",
        //    templateUrl: 'app/login/login.cshtml',
        //    controller: 'loginCtrl'
        //})
        // root
        .state('root', {
            "abstract": true,
            templateUrl: 'app/layout/layout.html',
        })
        // address book
        .state('root.addressBook', {
            url: "/address-book",
            templateUrl: 'app/address-book/address-book.html'
        })
        // main
        .state('root.main', {
            url: "/main",
            templateUrl: 'app/main/main.html'
        })
        // bizTalk dashboard
        .state('root.profile', {
            url: "/profile",
            templateUrl: 'app/profile/profile.html'
        })

    $urlRouterProvider
         .otherwise('/main');
}]);