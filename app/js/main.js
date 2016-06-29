/**
 * Created by vitalik on 28.06.16.
 */
/**
 *@config  - choice between content
 *@param $routeProvider
 */

angular.module('app', ['ngRoute','ui.bootstrap']);


angular.module('app')
    .config(function ($routeProvider) {
        $routeProvider.
        when('/house_1', {
            templateUrl: '/bizert/app/templates/frame_house.html',
            controller: 'house_1'
        }).
        when('/house_2', {
            templateUrl: '/bizert/app/templates/timber_house.html',
            controller: 'house_2'
        }).
        when('/house_3', {
            templateUrl: '/bizert/app/templates/frame_cottage.html',
            controller: 'house_3'
        }).
        when('/house_4', {
            templateUrl: '/bizert/app/templates/timber_cottage.html',
            controller: 'house_4'
        }).
        otherwise({
            redirectTo: '/house_1'
        });
    });
