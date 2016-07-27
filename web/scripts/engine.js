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

        $scope.createAccountFunc = function()
        {

        }


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



        $scope.data =
        {
            availableOptions:
                [
                        {id: '200', name: 'thunderstorm with light rain'},
                        {id: '300', name: 'light intensity drizzle'},
                        {id: '500', name: '500	light rain'}
                    ],
                    selectedOption: {id: '200', name: 'thunderstorm with light rain'} //This sets the default value of the select in the ui

        }

        /* Code available --> http://openweathermap.org/weather-conditions

         Weather condition codes

         Group 2xx: Thunderstorm
         ID	Meaning	Icon
         200	thunderstorm with light rain	 11d
         201	thunderstorm with rain	 11d
         202	thunderstorm with heavy rain	 11d
         210	light thunderstorm	 11d
         211	thunderstorm	 11d
         212	heavy thunderstorm	 11d
         221	ragged thunderstorm	 11d
         230	thunderstorm with light drizzle	 11d
         231	thunderstorm with drizzle	 11d
         232	thunderstorm with heavy drizzle	 11d

         Group 3xx: Drizzle
         ID	Meaning	Icon
         300	light intensity drizzle	 09d
         301	drizzle	 09d
         302	heavy intensity drizzle	 09d
         310	light intensity drizzle rain	 09d
         311	drizzle rain	 09d
         312	heavy intensity drizzle rain	 09d
         313	shower rain and drizzle	 09d
         314	heavy shower rain and drizzle	 09d
         321	shower drizzle	 09d

         Group 5xx: Rain
         ID	Meaning	Icon
         500	light rain	 10d
         501	moderate rain	 10d
         502	heavy intensity rain	 10d
         503	very heavy rain	 10d
         504	extreme rain	 10d
         511	freezing rain	 13d
         520	light intensity shower rain	 09d
         521	shower rain	 09d
         522	heavy intensity shower rain	 09d
         531	ragged shower rain	 09d

         Group 6xx: Snow
         ID	Meaning	Icon
         600	light snow	[[file:13d.png]]
         601	snow	[[file:13d.png]]
         602	heavy snow	[[file:13d.png]]
         611	sleet	[[file:13d.png]]
         612	shower sleet	[[file:13d.png]]
         615	light rain and snow	[[file:13d.png]]
         616	rain and snow	[[file:13d.png]]
         620	light shower snow	[[file:13d.png]]
         621	shower snow	[[file:13d.png]]
         622	heavy shower snow	[[file:13d.png]]

         Group 7xx: Atmosphere
         ID	Meaning	Icon
         701	mist	[[file:50d.png]]
         711	smoke	[[file:50d.png]]
         721	haze	[[file:50d.png]]
         731	sand, dust whirls	[[file:50d.png]]
         741	fog	[[file:50d.png]]
         751	sand	[[file:50d.png]]
         761	dust	[[file:50d.png]]
         762	volcanic ash	[[file:50d.png]]
         771	squalls	[[file:50d.png]]
         781	tornado	[[file:50d.png]]

         Group 800: Clear
         ID	Meaning	Icon
         800	clear sky	[[file:01d.png]] [[file:01n.png]]
         Group 80x: Clouds
         ID	Meaning	Icon
         801	few clouds	[[file:02d.png]] [[file:02n.png]]
         802	scattered clouds	[[file:03d.png]] [[file:03d.png]]
         803	broken clouds	[[file:04d.png]] [[file:03d.png]]
         804	overcast clouds	[[file:04d.png]] [[file:04d.png]]

         Group 90x: Extreme
         ID	Meaning
         900	tornado
         901	tropical storm
         902	hurricane
         903	cold
         904	hot
         905	windy
         906	hail

         Group 9xx: Additional
         ID	Meaning
         951	calm
         952	light breeze
         953	gentle breeze
         954	moderate breeze
         955	fresh breeze
         956	strong breeze
         957	high wind, near gale
         958	gale
         959	severe gale
         960	storm
         961	violent storm
         962	hurricane



         */



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

// loginPageController
iftttApp.controller('loginPageController',  ['$scope', '$routeParams',
    function ($scope, $rootscope, $routeParams, $http, $resource) {

        $scope.loginfunc = function(pass, email)
        {
            var loginDataSend =
            {
                "password:": pass,
                "email:": email
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

    }]);

