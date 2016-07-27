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


    $routeProvider.when('/choseTriggerActionWeather', {
        templateUrl: 'innerPages/weatherChannel/weatherChooseTriggerAction.html'
    });



    $routeProvider.when('/WeatherTrigger1', {
        templateUrl: 'innerPages/weatherChannel/WeatherTrigger1.html',
        controller: 'customWeatherActionControllerTrigger1'
    });

    $routeProvider.when('/WeatherTrigger2', {
        templateUrl: 'innerPages/weatherChannel/WeatherTrigger2.html',
        controller: 'customWeatherActionControllerTrigger2'
    });

    $routeProvider.when('/WeatherTrigger3', {
        templateUrl: 'innerPages/weatherChannel/WeatherTrigger3.html',
        controller: 'customWeatherActionControllerTrigger3'
    });


    $routeProvider.when('/WeatherTrigger4', {
        templateUrl: 'innerPages/weatherChannel/WeatherTrigger4.html',
        controller: 'customWeatherActionControllerTrigger4'
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



iftttApp.controller('customWeatherActionControllerTrigger1',  ['$scope', '$routeParams',
    function ($scope, $rootscope, $routeParams, $http, $resource) {
        $scope.loadHome = function()
        {
        }

        $scope.trigger1input = {
            value1: 0,
            value2: 0,
            value3: 0
        };



        $scope.errorButton = 'cia';
        $scope.checkadvisetimevar = 'NO';
        $scope.checktimeZonevar = 'NO'
        $scope.checkadvisetimefunc = function(name)
        {
            if($scope.checkadvisetimevar === "YES")
                $scope.checkadvisetimevar = 'NO';
            else
                $scope.checkadvisetimevar = 'YES';
            //console.log(name);
        };

        $scope.checktimeZonefunc = function(name)
        {
            if($scope.checktimeZonevar === "YES")
                $scope.checktimeZonevar = 'NO';
            else
                $scope.checktimeZonevar = 'YES';
            //console.log(name);
        };



    }]);

iftttApp.controller('customWeatherActionControllerTrigger2', ['$scope', '$rootScope', '$routeParams', '$http', '$location',
    function ($scope, $rootscope, $routeParams, $http, $resource, $location)
    {
        $scope.trigger1input = {
            value1: 0,
            value2: 0,
            value3: 0,
            value4: 0
        };




    }]);


iftttApp.controller('customWeatherActionControllerTrigger3', ['$scope', '$rootScope', '$routeParams', '$http', '$location',
    function ($scope, $rootscope, $routeParams, $http, $resource, $location)
    {
        $scope.trigger1input = {
            value3: 0
        };




        $scope.checkadvisesunsetvar = 'NO';
        $scope.checkadvisetsunrisevar = 'NO';
        $scope.checktimeZonevar = 'NO';

        $scope.checkadvisesunrisefunc = function(name)
        {
            if($scope.checkadvisetsunrisevar === "YES")
                $scope.checkadvisetsunrisevar = 'NO';
            else
                $scope.checkadvisetsunrisevar = 'YES';
            //console.log(name);
        };

        $scope.checkadvisetsunsetfunc = function(name)
        {
            if($scope.checkadvisesunsetvar === "YES")
                $scope.checkadvisesunsetvar = 'NO';
            else
                $scope.checkadvisesunsetvar = 'YES';
            //console.log(name);
        };

        $scope.checktimeZonefunc = function(name)
        {
            if($scope.checktimeZonevar === "YES")
                $scope.checktimeZonevar = 'NO';
            else
                $scope.checktimeZonevar = 'YES';
            //console.log(name);
        };




    }]);


iftttApp.controller('customWeatherActionControllerTrigger4', ['$scope', '$rootScope', '$routeParams', '$http', '$location',
    function ($scope, $rootscope, $routeParams, $http, $resource, $location)
    {
        $scope.trigger1input = {
            value1: 0,
            value2: 0,
            value3: 0,
            value4: 0
        };

    }]);



