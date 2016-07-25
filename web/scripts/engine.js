/**
 * Created by kazuhira on 22/07/16.
 */

var iftttApp = angular.module('iftttApp', ['ngRoute']);

iftttApp.config(['$routeProvider', function($routeProvider){

    $routeProvider.when('/', {
        templateUrl: 'innerPages/home.html',
        controller: 'homeController'
    });

    $routeProvider.when('#', {
        templateUrl: 'innerPages/home.html',
        controller: 'homeController'
    });

    $routeProvider.when('/home', {
        templateUrl: 'innerPages/home.html',
        controller: 'homeController'
    });

    $routeProvider.when('/index/createIF', {
        templateUrl: 'innerPages/if-creator.html',
        controller: 'ifCreatorController'
    });

    $routeProvider.when('/index/createDO', {
        templateUrl: 'innerPages/do-creator.html',
        controller: 'doCreatorController'
    });

    $routeProvider.when('/createRecipe', {
        templateUrl: 'innerPages/createRecipe.html',
        controller: 'createRecipeController'
    });

    $routeProvider.when('/chooseChannel', {
        templateUrl: 'innerPages/choose-channel.html',
        //controller: 'chooseChannelController'
    });

    $routeProvider.when('/loginPage', {
        templateUrl: 'innerPages/loginPage.html',
        controller: 'loginPageController'
    });

    $routeProvider.when('/index/myRecipes', {
        templateUrl: 'innerPages/myRecipes.html',
        controller: 'myRecipesController'
    });

    $routeProvider.when('/index/createAccount', {
        templateUrl: 'innerPages/createAccount.html',
        controller: 'createAccountController'
    });


    $routeProvider.when('/about', {
        templateUrl: 'innerPages/about.html'
    });

    $routeProvider.when('/index/about', {
        templateUrl: 'innerPages/about.html'
    });

    $routeProvider.when('/aboutSite', {
        templateUrl: 'innerPages/about-the-site.html'
    });

    $routeProvider.when('/ourTeam', {
        templateUrl: 'innerPages/ourTeam.html'
    });

    $routeProvider.when('/gMailTrigger', {
        templateUrl: 'innerPages/gmailChannel/gMail_Trigger.html',
        controller: 'GmailActionController'
    });


    $routeProvider.otherwise({redirectTo: '/home'});
}]);

iftttApp.controller('indexController',  ['$scope', '$routeParams',
    function ($scope, $rootscope, $routeParams, $http, $resource) {
        $scope.loadHome = function()
        {
            alert("weak");
            console.log("homeController: loaded");
        }

    }]);

iftttApp.controller('homeController',  ['$scope', '$routeParams',
    function ($scope, $rootscope, $routeParams, $http, $resource) {

        $scope.loadHome = function()
        {
            console.log("homeController: loaded");
        }

    }]);

iftttApp.controller('createRecipeController',  ['$scope', '$routeParams',
    function ($scope, $rootscope, $routeParams, $http, $resource) {

        $scope.loadHome = function()
        {
            console.log("createRecipeController: loaded");
        }

    }]);

iftttApp.controller('ifCreatorController',  ['$scope', '$routeParams',
    function ($scope, $rootscope, $routeParams, $http, $resource) {

        $scope.loadHome = function()
        {
            console.log("createRecipeController: loaded");
        }

    }]);

iftttApp.controller('doCreatorController',  ['$scope', '$routeParams',
    function ($scope, $rootscope, $routeParams, $http, $resource) {

        $scope.loadHome = function()
        {
            console.log("createRecipeController: loaded");
        }

    }]);

iftttApp.controller('doCreatorController',  ['$scope', '$routeParams',
    function ($scope, $rootscope, $routeParams, $http, $resource) {


    }]);


iftttApp.controller('myRecipesController',  ['$scope', '$routeParams',
    function ($scope, $rootscope, $routeParams, $http, $resource) {


    }]);

iftttApp.controller('createAccountController',  ['$scope', '$routeParams',
    function ($scope, $rootscope, $routeParams, $http, $resource) {


    }]);

iftttApp.controller('GmailActionController',  ['$scope', '$routeParams',
    function ($scope, $rootscope, $routeParams, $http, $resource) {


    }]);





