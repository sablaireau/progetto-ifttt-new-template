<%--
  Created by IntelliJ IDEA.
  User: kazuhira
  Date: 22/07/16
  Time: 15:07
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html ng-app="iftttApp">
  <head>
    <title>Home</title>
    <script src="bower_components/jquery/dist/jquery.js"></script>
    <script src="bower_components/angular/angular.js"></script>
    <script src="bower_components/angular-route/angular-route.js"></script>
    <script src="bower_components/bootstrap/dist/js/bootstrap.js"></script>


    <link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap.css">
    <link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap-theme.css">
    <link rel="stylesheet" href="stylesheets/2-col-portfolio.css">
    <link rel="stylesheet" href="stylesheets/index.css">
    <link rel="stylesheet" href="stylesheets/loginPage.css">


    <script src="scripts/engine.js"></script>
  </head>
  <body ng-controller="indexController">

  <nav class="navbar navbar-inverse navbar-fixed-top navbar-default">
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#home"><span class="glyphicon glyphicon-home" aria-hidden="true"></span></a>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <li><a href="#createRecipe">Create a recipe</a></li>
          <li><a href="#chooseChannel">Channels</a></li>
        </ul>
        <form class="navbar-form navbar-right" role="search">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="username">
            <input type="password" class="form-control" placeholder="password">
          </div>
          <button type="submit" class="btn btn-default"><span class="glyphicon glyphicon-log-in" aria-hidden="true"></span> Login</button>
        </form>
      </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
  </nav>



  <ng-view></ng-view>






  <nav class="navbar navbar-inverse navbar-fixed-bottom navbar-default center">
    <div class="container">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-navbar-collapse-2" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse navbar-inner" id="bs-navbar-collapse-2">
        <ul class="nav navbar-nav">

          <li><a href="#aboutSite"><span class="glyphicon glyphicon-info-sign" aria-hidden="true"></span> About the site</a></li>
          <li><a href="#ourTeam"><span class="glyphicon glyphicon-cog" aria-hidden="true"></span> The developers</a></li>
          <li><a href="http://www.polito.it" target="_blank"><span class="glyphicon glyphicon-education" aria-hidden="true"></span> PoliTo</a></li>
          <li><a href="https://creativecommons.org" target="_blank">Copyright <span class="glyphicon glyphicon-copyright-mark" aria-hidden="true"></span> IFTTT by PoliTo 2016</a></li>



        </ul>

      </div><!-- /.navbar-collapse -->
    </div><!-- /.container-->
  </nav>








  </body>

</html>


<!--
<button  ng-click="loadHome()"><a href="#home"> home </a></button>

<button ng-click="loadHome()">OK</button>

-->
