var app = angular
    .module('app', ['ngMessages', 'ngRoute', 'ngAnimate', 'toaster', 'mgcrea.ngStrap']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'app/shared/view/home.html',
            controller: 'HomeCtrl'
        }).
        when('/contact', {
            templateUrl: 'app/shared/view/contact.html',
            controller: 'CotactCtrl'
        }).
        when('/student', {
            templateUrl: 'app/component/student/view/index.html',
            controller: 'StudentCtrl'
        }).
        when('/student/:id', {
            templateUrl: 'app/component/student/view/edit.html',
            controller: 'StudentEditCtrl'
        }).
        when('/create-student', {
            templateUrl: 'app/component/student/view/edit.html',
            controller: 'StudentEditCtrl'
        }).
        when('/delete-student/:id', {
            templateUrl: 'app/component/student/view/delete.html',
            controller: 'StudentEditCtrl'
        }).
        otherwise({
            redirectTo: '/'
        });
    $locationProvider.html5Mode(true);
}]);

app.config(function ($selectProvider) {
    angular.extend($selectProvider.defaults, {
        animation: 'am-flip-x',
        sort: false
    });
})
