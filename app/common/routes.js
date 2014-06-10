app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    //states
    $stateProvider
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
        //edit profile
        .state('root.profile', {
            url: "/profile",
            templateUrl: 'app/profile/profile.html'
        })

    $urlRouterProvider
         .otherwise('/main');
}]);