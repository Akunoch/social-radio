window.App = angular.module("SocialRadio", ['ngAnimate','ui.router','templates','youtube-embed','facebook'])
	.config(['$stateProvider', '$urlRouterProvider','$locationProvider','FacebookProvider',function ($stateProvider, $urlRouterProvider, $locationProvider,FacebookProvider) { 

     var myAppId = '1559543930974075';

     FacebookProvider.init(myAppId);     
        
	console.log("je passe ici")
    $stateProvider.state('home', {
            url: '/',
            templateUrl: '/assets/home.html',
            controller: 'HomeCtrl'
        });
    $stateProvider.state('login',{
            url:'/login',
            templateUrl:'/assets/login.html',
            controller:'authenticationCtrl'
        });
    $stateProvider.state('logout',{
        url:'/logout',
        templateUrl:'assets/login.html',
        controller:'LogoutController'
    })


    // default fall back route
    $urlRouterProvider.otherwise('/login');

    // enable HTML5 Mode for SEO
    $locationProvider.html5Mode(true);
}])
