/**
 * Created by Administrator on 2017/10/19.
 */
var app=angular.module("myApp",["ui.router"]);

app.config(function($stateProvider,$urlRouterProvider){
    $stateProvider
        .state("serve",{
            url:"/serve",
            templateUrl:"App/Views/serve.html",
            controller:"carCon"
        })
        .state("serve1",{
            url:"/serve1",
            templateUrl:"App/Views/serve1.html"
        })
    $urlRouterProvider.otherwise("/serve")
})