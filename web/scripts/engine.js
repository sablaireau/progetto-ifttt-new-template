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
        controller: 'GmailTriggerController'
    });


    $routeProvider.when('/gMailAction', {
        templateUrl: 'innerPages/gmailChannel/gMail_Action.html',
        controller: 'GmailActionController'
    });

    $routeProvider.when('/gMailSucces', {
        templateUrl: 'innerPages/gmailChannel/gmailSuccess.html'
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




iftttApp.controller('GmailTriggerController', ['$scope', '$rootScope', '$routeParams', '$http', '$location',
    function ($scope, $rootscope, $routeParams, $http, $resource, $location) {

        //Bug stringa null

        $scope.triggerGmail = function(user)
        {

            if (angular.isUndefined(user))
            {
                //alert("Almost a field must be completed");
                if($scope.checkemailvar === "YES"  &&  $scope.checkedSubjectvar === "YES") {
                    var loginDataSend =
                    {
                        "sender:": "",
                        "subject": ""
                    };
                    //alert(loginDataSend.pssword);
                    $.ajax({
                        method: "post",
                        url: "/MyServlet",
                        data: loginDataSend,
                        dataType: "json",
                        success: console.log("la post ha avuto successo n1.1")
                    });
                }
                if($scope.checkemailvar === "NO"  &&  $scope.checkedSubjectvar === "YES") {
                    var loginDataSend =
                    {
                        "sender:": "null",
                        "subject": ""
                    };
                    //alert(loginDataSend.pssword);
                    $.ajax({
                        method: "post",
                        url: "/MyServlet",
                        data: loginDataSend,
                        dataType: "json",
                        success: console.log("la post ha avuto successo n1.2")
                    });
                }
                if($scope.checkemailvar === "YES"  &&  $scope.checkedSubjectvar === "NO") {
                    var loginDataSend =
                    {
                        "sender:": "",
                        "subject": "null"
                    };
                    //alert(loginDataSend.pssword);
                    $.ajax({
                        method: "post",
                        url: "/MyServlet",
                        data: loginDataSend,
                        dataType: "json",
                        success: console.log("la post ha avuto successo n1.3")
                    });
                }


            }

            else
            {
                var view = "SubGMailAction";

                //alert(user.email + "  " + user.subjectReceive);

                if ((angular.isDefined( user.email) && angular.isDefined( user.subjectReceive)) )
                {
                    //Cosa fare se la stringa è vuota? Magari vuole l'email con il subject vuoto?

                    $scope.triggerGmailData = angular.copy(user);
                    var loginDataSend =
                    {
                        "sender:": $scope.triggerGmailData.email,
                        "subject": $scope.triggerGmailData.subjectReceive
                    };
                    //alert(loginDataSend.pssword);
                    $.ajax({
                        method: "post",
                        url: "/MyServlet",
                        data: loginDataSend,
                        dataType: "json",
                        success: console.log("la post ha avuto successo n2")
                    });
                    //return;
                    //alert("Two defined");


                }

                else
                {
                    if (angular.isDefined( user.subjectReceive))
                    {
                        //Cosa fare se la stringa è vuota? Magari vuole l'email con il subject vuoto?

                        $scope.triggerGmailData = angular.copy(user);
                        if($scope.checkemailvar === "YES")
                        {
                            var loginDataSend =
                            {
                                "sender:": "",
                                "subject:": $scope.triggerGmailData.subjectReceive
                            };
                            //alert(loginDataSend.pssword);
                            $.ajax({
                                method: "post",
                                url: "/MyServlet",
                                data: loginDataSend,
                                dataType: "json",
                                success: console.log("la post ha avuto successo n3.1")
                            });
                        }
                        else
                        {
                            var loginDataSend =
                            {
                                "sender:": "null",
                                "subject:": $scope.triggerGmailData.subjectReceive
                            };
                            //alert(loginDataSend.pssword);
                            $.ajax({
                                method: "post",
                                url: "/MyServlet",
                                data: loginDataSend,
                                dataType: "json",
                                success: console.log("la post ha avuto successo n3.2")
                            });

                        }
                        //return;
                        //alert(" subjectReceive ");


                    }
                    else
                    {
                        if (angular.isDefined( user.email))
                        {
                            //Cosa fare se la stringa è vuota? Magari vuole l'email con il subject vuoto?

                            $scope.triggerGmailData = angular.copy(user);
                            if($scope.checkedSubjectvar === "YES")
                            {
                                var loginDataSend =
                                {
                                    "sender:": $scope.triggerGmailData.email,
                                    "subject:": ""
                                };
                                //alert(loginDataSend.pssword);
                                $.ajax({
                                    method: "post",
                                    url: "/MyServlet",
                                    data: loginDataSend,
                                    dataType: "json",
                                    success: console.log("la post ha avuto successo n4.1")
                                });
                            }
                            else
                            {
                                var loginDataSend =
                                {
                                    "sender:": $scope.triggerGmailData.email,
                                    "subject:": "NULL"
                                };
                                //alert(loginDataSend.pssword);
                                $.ajax({
                                    method: "post",
                                    url: "/MyServlet",
                                    data: loginDataSend,
                                    dataType: "json",
                                    success: console.log("la post ha avuto successo n4.2")
                                });

                            }


                        }

                    }

                }
                //alert("You have  completed the form");
                //$location.path(view);
            }

        }




        $scope.checkemailvar = 'NO';
        $scope.checkemailfunc = function(name)
        {
            if($scope.checkemailvar === "YES")
                $scope.checkemailvar = 'NO';
            else
                $scope.checkemailvar = 'YES';
            //console.log(name);
        };


        $scope.checkedSubjectvar = 'NO';
        $scope.checkedSubjectfunc = function(checkedSubjectvar)
        {
            if($scope.checkedSubjectvar === "YES")
                $scope.checkedSubjectvar = 'NO';
            else
                $scope.checkedSubjectvar = 'YES';
            //console.log(name);
        };



    }]);


iftttApp.controller('GmailActionController', ['$scope', '$rootScope', '$routeParams', '$http', '$location',
    function ($scope, $rootscope, $routeParams, $http, $resource, $location) {

        //Bug stringa null

        $scope.actionGmail = function(user)
        {

            if (angular.isUndefined(user))
            {
                //alert("Almost a field must be completed");
                if($scope.checkemailvar === "YES"  &&  $scope.checkedSubjectvar === "YES") {
                    var loginDataSend =
                    {
                        "sender:": "",
                        "subject": ""
                    };
                    //alert(loginDataSend.pssword);
                    $.ajax({
                        method: "post",
                        url: "/MyServlet",
                        data: loginDataSend,
                        dataType: "json",
                        success: console.log("la post ha avuto successo n1.1")
                    });
                }
                if($scope.checkemailvar === "NO"  &&  $scope.checkedSubjectvar === "YES") {
                    var loginDataSend =
                    {
                        "sender:": "null",
                        "subject": ""
                    };
                    //alert(loginDataSend.pssword);
                    $.ajax({
                        method: "post",
                        url: "/MyServlet",
                        data: loginDataSend,
                        dataType: "json",
                        success: console.log("la post ha avuto successo n1.2")
                    });
                }
                if($scope.checkemailvar === "YES"  &&  $scope.checkedSubjectvar === "NO") {
                    var loginDataSend =
                    {
                        "sender:": "",
                        "subject": "null"
                    };
                    //alert(loginDataSend.pssword);
                    $.ajax({
                        method: "post",
                        url: "/MyServlet",
                        data: loginDataSend,
                        dataType: "json",
                        success: console.log("la post ha avuto successo n1.3")
                    });
                }


            }

            else
            {
                var view = "SubGMailAction";

                //alert(user.email + "  " + user.subjectReceive);

                if ((angular.isDefined( user.email) && angular.isDefined( user.subjectReceive)) )
                {
                    //Cosa fare se la stringa è vuota? Magari vuole l'email con il subject vuoto?

                    $scope.triggerGmailData = angular.copy(user);
                    var loginDataSend =
                    {
                        "sender:": $scope.triggerGmailData.email,
                        "subject": $scope.triggerGmailData.subjectReceive
                    };
                    //alert(loginDataSend.pssword);
                    $.ajax({
                        method: "post",
                        url: "/MyServlet",
                        data: loginDataSend,
                        dataType: "json",
                        success: console.log("la post ha avuto successo n2")
                    });
                    //return;
                    //alert("Two defined");


                }

                else
                {
                    if (angular.isDefined( user.subjectReceive))
                    {
                        //Cosa fare se la stringa è vuota? Magari vuole l'email con il subject vuoto?

                        $scope.triggerGmailData = angular.copy(user);
                        if($scope.checkemailvar === "YES")
                        {
                            var loginDataSend =
                            {
                                "sender:": "",
                                "subject:": $scope.triggerGmailData.subjectReceive
                            };
                            //alert(loginDataSend.pssword);
                            $.ajax({
                                method: "post",
                                url: "/MyServlet",
                                data: loginDataSend,
                                dataType: "json",
                                success: console.log("la post ha avuto successo n3.1")
                            });
                        }
                        else
                        {
                            var loginDataSend =
                            {
                                "sender:": "null",
                                "subject:": $scope.triggerGmailData.subjectReceive
                            };
                            //alert(loginDataSend.pssword);
                            $.ajax({
                                method: "post",
                                url: "/MyServlet",
                                data: loginDataSend,
                                dataType: "json",
                                success: console.log("la post ha avuto successo n3.2")
                            });

                        }
                        //return;
                        //alert(" subjectReceive ");


                    }
                    else
                    {
                        if (angular.isDefined( user.email))
                        {
                            //Cosa fare se la stringa è vuota? Magari vuole l'email con il subject vuoto?

                            $scope.triggerGmailData = angular.copy(user);
                            if($scope.checkedSubjectvar === "YES")
                            {
                                var loginDataSend =
                                {
                                    "sender:": $scope.triggerGmailData.email,
                                    "subject:": ""
                                };
                                //alert(loginDataSend.pssword);
                                $.ajax({
                                    method: "post",
                                    url: "/MyServlet",
                                    data: loginDataSend,
                                    dataType: "json",
                                    success: console.log("la post ha avuto successo n4.1")
                                });
                            }
                            else
                            {
                                var loginDataSend =
                                {
                                    "sender:": $scope.triggerGmailData.email,
                                    "subject:": "NULL"
                                };
                                //alert(loginDataSend.pssword);
                                $.ajax({
                                    method: "post",
                                    url: "/MyServlet",
                                    data: loginDataSend,
                                    dataType: "json",
                                    success: console.log("la post ha avuto successo n4.2")
                                });

                            }


                        }

                    }

                }
                //alert("You have  completed the form");
                //$location.path(view);
            }

        }




        $scope.checkemailvar = 'NO';
        $scope.checkemailfunc = function(name)
        {
            if($scope.checkemailvar === "YES")
                $scope.checkemailvar = 'NO';
            else
                $scope.checkemailvar = 'YES';
            //console.log(name);
        };


        $scope.checkedSubjectvar = 'NO';
        $scope.checkedSubjectfunc = function(checkedSubjectvar)
        {
            if($scope.checkedSubjectvar === "YES")
                $scope.checkedSubjectvar = 'NO';
            else
                $scope.checkedSubjectvar = 'YES';
            //console.log(name);
        };


    }]);





